import React, { Component } from "react";
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min.js";

class FillDay extends Component {
  componentDidMount() {
    const calendars = bulmaCalendar.attach('[type="datetime"]');
  }
  render() {
    return (
      <div className="field">
        <label className="label is-uppercase" />
        <div className="control">
          <input
            type="datetime"
            data-display-mode="inline"
            data-is-range="true"
            data-close-on-select="true"
            weekStart="1"
            showTodayButton="true"
            disabledWeekDays="Sunday Saturday"
            dateFormat="DD/MM/YYYY"
            todayLabel="Today"
            nowLabel="Now"
            validateLabel="Validate"
          />
        </div>
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
        <div class="select">
          <select>
            <option>Less than an hour</option>
            <option>Btw an hour and 2 hours</option>
            <option>More than 2 hours</option>
          </select>
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
