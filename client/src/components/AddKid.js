import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddKid extends Component {
  render() {
    let classes = ["modal"];
    if (this.props.showModal) {
      classes.push("is-active");
      classes.push("is-clipped");
    }
    return (
      <div className="container">
        <div className={classes.join(" ")}>
          <div className="modal-background" />
          <div className="modal-content">
            <div className="field">
              <label className="label">First Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="text"
                  placeholder="Text input"
                  value="Kiddo"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="user" size="sm" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="text"
                  placeholder="Text input"
                  value="Jones"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="user" size="sm" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Age</label>
              <div className="control">
                <input className="input" type="text" placeholder="2" />
              </div>
            </div>

            <div class="field">
              <label class="label">Parent's Email</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  placeholder="Email input"
                  value="hello@"
                />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon="envelope" size="sm" />{" "}
                </span>
              </div>

              <br />

              <div className="file is-boxed is-centered">
                <label className="file-label">
                  <input className="file-input" type="file" name="resume" />
                  <span className="file-cta">
                    <span className="file-icon">
                      <FontAwesomeIcon icon="upload" />
                    </span>
                    <span className="file-label">Choose a picture...</span>
                  </span>
                </label>
              </div>

              <br />

              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <a className="button is-primary">Submit</a>
                </p>
                <p className="control">
                  <a
                    className="button is-light"
                    onClick={this.props.toggleModal}
                  >
                    Cancel
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.props.toggleModal}
          />
        </div>
      </div>
    );
  }
}

export default AddKid;
