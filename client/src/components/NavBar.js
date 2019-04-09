import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-link is-fixed-bottom" role="navigation">
          <div class="navbar-brand">
            <a class="navbar-item is-expanded  is-block has-text-centered">
              <i class="fa fa-user" />
              <p class="is-size-7">Admin</p>
            </a>
            <a class="navbar-item is-expanded  is-block has-text-centered">
              <i class="fa fa-list" />
              <p class="is-size-7">Tasks</p>
            </a>
            <a class="navbar-item is-expanded is-block has-text-centered">
              <i class="fa fa-flag" />
              <p class="is-size-7">Alerts</p>
            </a>
            <a class="navbar-item is-expanded  is-block has-text-centered">
              <i class="fa fa-cog" />
              <p class="is-size-7">Settings</p>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
