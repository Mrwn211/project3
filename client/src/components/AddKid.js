import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddKid extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      image: "",
      parentEmail: ""
    };
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   // Axios post avec mon api json addkid

  //   //     .then(() => this.props.history.push("/admin"));
  // };

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };
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
                  placeholder="Didoo"
                  name="firstName"
                  value={this.state.firstName}
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
                  placeholder="Kidoo"
                  name="lastName"
                  value={this.lastName}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="user" size="sm" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Age</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="2"
                  name="age"
                  value={this.age}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Parent's Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                  name="parentEmail"
                  value={this.parentEmail}
                />
                <span className="icon is-small is-left">
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
