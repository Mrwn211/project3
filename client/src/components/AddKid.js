import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KidService from "./kid-service.js";

class AddKid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      parentEmail: ""
    };
    this.service = new KidService();
  }

  handleFileUpload = (kid_id, cb) => {
    const photo = document.getElementById("photo");
    console.log("The file to be uploaded is: ", photo.files[0]);
    const uploadData = new FormData();
    uploadData.append("image", photo.files[0]);
    return this.service
      .handleUpload(uploadData, kid_id)
      .then(response => {
        console.log("response is: ", response.url);
        this.setState({ image: response.url }, () => {
          cb(response.url);
        });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = event => {
    console.log("coucou", this.props);
    event.preventDefault();
    this.service
      .addKid(
        this.state.firstname,
        this.state.lastname,
        this.state.age,
        this.state.parentEmail
      )
      .then(data => {
        this.handleFileUpload(data.kid._id, image => {
          console.log("image", image);
          data.kid.image = image;
          console.log("kid", data.kid);
          this.props.kidcreated(data.kid);
        });
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
                    name="firstname"
                    value={this.state.firstname}
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
                    name="lastname"
                    value={this.state.lastname}
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
