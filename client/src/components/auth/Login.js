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
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="">
                <img src={mascott} />
              </div>
              <div className="box">
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="text"
                        placeholder="Your Username"
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
                    Login
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                <Link to="/signup">Sign Up</Link> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
