import React, { Component } from "react";

class AddKid extends Component {
  render() {
    let classes = ["modal"];
    if (this.props.showModal) {
      classes.push("is-active");
      classes.push("is-clipped");
    }
    return (
      <div className={classes.join(" ")}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Kiddo" />
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Jones" />
              </div>
            </div>
            <div className="field">
              <label className="label">Age</label>
              <div className="control">
                <input className="input" type="text" placeholder="Jones" />
              </div>
            </div>
            <div className="field">
              <label className="label">Parent's Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="e.g. daddyjones@gmail.com"
                />
              </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <a className="button is-primary">Submit</a>
              </p>
              <p className="control">
                <a className="button is-light">Cancel</a>
              </p>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
      </div>
    );
  }
}

export default AddKid;
