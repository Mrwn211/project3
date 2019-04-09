import React from "react";
import "bulma/css/bulma.css";

import AuthService from "./auth-service.js";
import { Link } from "react-router-dom";
import Login from "./Login.js";

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
      <div className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Signup</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <div className="avatar">
                  <img src="https://res.cloudinary.com/mrwn211/image/upload/v1554319207/mascott.jpg" />
                </div>
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                        autofocus
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                      />
                    </div>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth">
                    Signup
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                <Link to="/login" />
                Login
                <Link /> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
