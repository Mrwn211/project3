import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KidService from "./kid-service.js";

class AddKid extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      parentEmail: ""
    };
    this.service = new KidService();
  }

  handleFileUpload = kid_id => {
    const photo = document.getElementById("photo");
    console.log("The file to be uploaded is: ", photo.files[0]);
    const uploadData = new FormData();
    uploadData.append("image", photo.files[0]);
    this.service
      .handleUpload(uploadData, kid_id)
      .then(response => {
        console.log("response is: ", response);
        this.setState({ image: response });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.service
      .addKid(this.state.firstName, this.state.lastName, this.state.age)
      .then(data => {
        this.handleFileUpload(data._id);
        this.props.history.push("/admin");
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

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
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    placeholder="Didoo"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
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
                    value={this.state.lastName}
                    onChange={this.handleChange}
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
                    value={this.state.age}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Parent's Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="daddy@example.com"
                    name="parentEmail"
                    value={this.state.parentEmail}
                    onChange={this.handleChange}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" size="sm" />{" "}
                  </span>
                </div>
                <br />
                <div className="file is-boxed is-centered">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      id="photo"
                      // onChange={e => this.handleFileUpload(e)}
                    />
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
                    <button className="button is-primary">Submit</button>
                  </p>
                  <p className="control">
                    <button
                      className="button is-light"
                      onClick={this.props.toggleModal}
                    >
                      Cancel
                    </button>
                  </p>
                </div>
              </div>
            </form>
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
