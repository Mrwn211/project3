import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KidService from "../kid-service.js";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min.js";
import axios from "axios";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: {}
    };
    this.service = new KidService();
  }

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
      const selectedDate = datepicker.data.value();

      console.log("datepicker1", datepicker, selectedDate);
      this.setState({ date: selectedDate });

      axios
        .get(
          `${process.env.REACT_APP_APIURL || ""}/parent/day/${selectedDate}`,
          {
            withCredentials: true
          }
        )
        .then(response => {
          const day = response.data;
          this.setState({ day: day });
        })
        .catch(err => {
          this.setState({ day: {} });
        });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="datepicker">
          <form onSubmit={this.handleSubmit}>
            <input type="date" className="date" onChange={this.handleChange} />
          </form>
        </div>
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-large is-primary">
              <FontAwesomeIcon icon="clock" size="sm" />
              <p class="check-in">{` Check-in : ${this.state.day.start}`}</p>
            </span>
          </header>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-warning is-icon ">
              <i>
                <FontAwesomeIcon icon="running" size="lg" />
              </i>
            </div>
            <div className="timeline-content">
              <p className="heading">Morning Activity</p>
              <p className="morning">{`${this.state.day.morningActivity}`}</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-warning is-icon">
              <i>
                <FontAwesomeIcon icon="utensils" size="lg" />
              </i>
            </div>
            <div className="timeline-content">
              <p className="heading">MEAL</p>
              <p className="meal">{`${this.state.day.meal}`}</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-info">NAP</span>
          </header>
          <div className="timeline-item is-info">
            <div className="timeline-marker is-info is-icon">
              <i>
                <FontAwesomeIcon icon="bed" size="lg" />
              </i>
            </div>
            <div className="timeline-content">
              <p className="meal">{`${this.state.day.nap}`}</p>
            </div>
          </div>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-warning is-icon ">
              <i>
                <FontAwesomeIcon icon="running" size="lg" />
              </i>
            </div>
            <div className="timeline-content">
              <p className="heading">Afternoon Activity</p>
              <p className="morning">{`${this.state.day.afternoonActivity}`}</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-large is-primary">
              <FontAwesomeIcon icon="clock" size="sm" />
              <p class="check-in">{` Check-Out : ${this.state.day.end}`}</p>
            </span>
          </header>
        </div>
      </div>
    );
  }
}

export default Timeline;
