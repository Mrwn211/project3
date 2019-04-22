import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KidService from "../kid-service.js";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min.js";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kid: {},
      date: ""
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
      console.log("datepicker1", datepicker, datepicker.data.value());
      this.setState({ date: datepicker.data.value() });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="datepicker">
          <form className="" onSubmit={this.handleSubmit}>
            <input type="date" className="date" onChange={this.handleChange} />
          </form>
        </div>
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">Check-in</span>
          </header>
          <div className="timeline-item is-primary">
            <div className="timeline-marker is-primary" />
            <div className="timeline-content">
              <p className="heading">January 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <div className="timeline-item is-warning">
            <div className="timeline-marker is-warning is-image is-32x32">
              <img src="http://bulma.io/images/placeholders/32x32.png" />
            </div>
            <div className="timeline-content">
              <p className="heading">February 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2017</span>
          </header>
          <div className="timeline-item is-danger">
            <div className="timeline-marker is-danger is-icon">
              <i className="fa fa-flag" />
            </div>
            <div className="timeline-content">
              <p className="heading">March 2017</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">Check-Out</span>
          </header>
        </div>
      </div>
    );
  }
}

export default Timeline;
