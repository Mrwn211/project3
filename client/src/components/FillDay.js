import React from "react";

const FillDay = ({ label, value, handleChange }) => {
  return (
    <div className="field">
      <label className="label is-uppercase">{label}</label>
      <div className="control">
        <input
          type="date"
          data-display-mode="inline"
          data-is-range="true"
          data-close-on-select="false"
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
};

export default FillDay;
