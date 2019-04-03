import React from "react";
import "bulma/css/bulma.css";

import AuthService from "./auth-service.js";
import { Link } from "react-router-dom";

export default class extends React.Component {
  state = {
    username: "",
    password: ""
  };

  service = new AuthService();

  handleSubmit = event => {
    event.preventDefault();
    this.service
      .login(this.state.username, this.state.password)
      .then(response => {
        this.props.updateUser(response);
        this.props.history.push("/");
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div classname="hero is-success is-fullheight">
        <div classname="hero-body">
          <div classname="container has-text-centered">
            <div classname="column is-4 is-offset-4">
              <h3 classname="title has-text-grey">Login</h3>
              <p classname="subtitle has-text-grey">Please login to proceed.</p>
              <div classname="box">
                <div classname="avatar">
                  <img src="https://placehold.it/128x128" />
                </div>
                <form>
                  <div classname="field">
                    <div classname="control">
                      <input
                        classname="input is-large"
                        type="email"
                        placeholder="Your Email"
                        autofocus
                      />
                    </div>
                  </div>
                  <div classname="field">
                    <div classname="control">
                      <input
                        classname="input is-large"
                        type="password"
                        placeholder="Your Password"
                      />
                    </div>
                  </div>
                  <div classname="field">
                    <label classname="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button classname="button is-block is-info is-large is-fullwidth">
                    Login
                  </button>
                </form>
              </div>
              <p classname="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
