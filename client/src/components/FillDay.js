import React, { Component } from "react";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KidService from "./kid-service.js";

class FillDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().split("T")[0], // date du jour: `AAAA-MM-DD`
      start: "",
      meal: "",
      end: "",
      morningActivity: "",
      afternoonActivity: "",
      nap: ""
    };
    this.service = new KidService();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.service
      .addDay(
        this.props.kid_id,
        this.state.date,
        this.state.start,
        this.state.end,
        this.state.morningActivity,
        this.state.meal,
        this.state.afternoonActivity,
        this.state.nap
      )
      .then(() => this.props.history.push("/admin"));
  };

  componentDidMount() {
    const calendars = bulmaCalendar.attach('[class="date"]', {
      weekStart: 1,
      weekDays: true,
      showHeader: true,
      displayMode: "inline",
      disabledWeekDays: [0, 6],
      isRange: false,
      position: "center",
      showTodayButton: true,
      startDate: new Date().toISOString().split("T")[0],
      dateFormat: "YYYY-MM-DD"
    });
    calendars[0].on("select", datepicker => {
      console.log("datepicker1", datepicker, datepicker.data.value());
      this.setState({ date: datepicker.data.value() });
    });

    const timer = bulmaCalendar.attach("[class=timer]", {
      displayMode: "inline",
      isRange: true,
      labelFrom: "Check In",
      labelTo: "Check Out",
      type: "time",
      timeFormat: "HH:mm"
    });
    timer[0].on("select", datepicker => {
      console.log("datepicker2", datepicker, datepicker.data.value());

      this.setState({
        start: `${this.state.date}T${datepicker.data.value().split(" - ")[0]}`,
        end: `${this.state.date}T${datepicker.data.value().split(" - ")[1]}`
      });
    });

    // const minuter = bulmaCalendar.attach("[class=nap]", {
    //   isRange: false,
    //   displayMode: "inline",
    //   type: "time",
    //   timeFormat: "HH:mm"
    // });
    // minuter[0].on("select", datepicker => {
    //   console.log("datepicker3", datepicker, datepicker.data.value());
    //   this.setState({ nap: +datepicker.data.value().split(":")[0] });
    // });
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <input type="date" className="date" onChange={this.handleChange} />
        <input type="time" className="timer" onChange={this.handleChange} />
        <div className="field">
          <label className="label">Morning Activity</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="morningActivity"
              placeholder="Gym"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Meal</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Textarea"
              name="meal"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Afternoon Activity</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="afternoonActivity"
              placeholder="Gardening"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="clock" size="sm" />
            </span>
            Nap Duration
          </label>
          <input
            className="input"
            name="nap"
            type="text"
            onChange={this.handleChange}
          />
          {/* <input className="input" name="nap" type="time" className="nap" /> */}
        </div>
        <br /> <br />
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button className="button is-primary">Submit</button>
          </p>
          <p className="control">
            <a className="button is-light">Cancel</a>
          </p>
        </div>
      </form>
    );
  }
}

export default FillDay;
