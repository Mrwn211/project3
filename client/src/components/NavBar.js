import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthService from "./auth/auth-service.js";
import { Link } from "react-router-dom";
import AddKid from "./AddKid.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
  }

  handleLogOut = event => {
    event.preventDefault();
    this.service.logout().then(() => this.props.history.push("/login"));
  };

  render() {
    return (
      <div>
        <nav className="navbar is-link is-fixed-bottom" role="navigation">
          <div className="navbar-brand">
            <button
              onClick={() => {
                this.props.toggleModal();
              }}
              className="navbar-item is-expanded is-block has-text-centered"
            >
              <FontAwesomeIcon icon="plus-circle" />
              <p className="is-size-7">Add Kid</p>
            </button>
            <button
              onClick={this.handleLogOut}
              className="navbar-item is-expanded  is-block has-text-centered"
            >
              <FontAwesomeIcon icon="sign-out-alt" />
              <p className="is-size-7">Logout</p>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
