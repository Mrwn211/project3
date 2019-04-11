import React, { Component } from "react";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FillDay extends Component {
  componentDidMount() {
    const calendars = bulmaCalendar.attach('[type="datetime"]', {
      weekStart: 1,
      weekDays: true,
      showHeader: true,
      labelFrom: "Check-in",
      labelTo: "Check-out",
      allowSameDayRange: true,
      displayMode: "inline",
      disabledWeekDays: [0, 6],
      isRange: true,
      position: "center"
    });
  }
  render() {
    return (
      <div className="container">
        <input
          type="datetime"
          data-close-on-select="true"
          showTodayButton="true"
          weekDays="true"
          dateFormat="DD/MM/YYYY"
          todayLabel="Today"
          nowLabel="Now"
          validateLabel="Validate"
          position="auto"
        />
        <div className="field">
          <label className="label">Morning Activity</label>
          <div className="control">
            <input className="input" type="text" placeholder="Gym" />
          </div>
        </div>
        <div className="field">
          <label className="label">Meal</label>
          <div className="control">
            <textarea class="textarea" placeholder="Textarea" />
          </div>
        </div>
        <div className="field">
          <label className="label">Afternoon Activity</label>
          <div className="control">
            <input className="input" type="text" placeholder="Gardening" />
          </div>
        </div>
        <div class="field">
          <label className="label">
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="clock" size="sm" />
            </span>
            Nap Duration
          </label>

          <input className="input" type="time" />
        </div>
        <br /> <br />
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a className="button is-primary">Submit</a>
          </p>
          <p className="control">
            <a className="button is-light">Cancel</a>
          </p>
        </div>
      </div>
    );
  }
}

export default FillDay;
