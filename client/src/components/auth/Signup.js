import React from "react";
import "bulma/css/bulma.css";

import AuthService from "./auth-service.js";
import { Link } from "react-router-dom";
import mascott from "../img/mascott.png";

export default class extends React.Component {
  state = {
    username: "",
    password: ""
  };

  service = new AuthService();

  handleSubmit = event => {
    event.preventDefault();
    this.service
      .signup(this.state.username, this.state.password)
      .then(() => this.props.history.push("/admin"));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Signup</h3>
              <p className="subtitle has-text-grey">
                Please signup to proceed.
              </p>
              <div className="">
                <img src={mascott} />
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="text"
                      placeholder="Your Username"
                      autofocus
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button
                  className="button is-block is-info is-large is-fullwidth"
                  onClick={this.handleSubmit}
                >
                  Signup
                </button>
              </form>
            </div>
            <p className="has-text-grey">
              <Link to="/login">Login</Link> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            </p>
          </div>
        </div>
      </div>
    );
  }
}
