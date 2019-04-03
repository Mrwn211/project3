import React, { Component } from "react";
import "./App.scss";
import "bulma/css/bulma.css";

import { Link, Switch, Route } from "react-router-dom";

import Popin from "./components/Popin.js";

import Signup from "./components/auth/Signup.js";
import Login from "./components/auth/Login.js";
import Profile from "./components/auth/Profile.js";
import AuthService from "./components/auth/auth-service.js";

import Homepage from "./components/Homepage.js";

class App extends Component {
  state = {
    user: null
  };

  service = new AuthService();

  fetchUser = () => {
    if (this.state.user === null) {
      this.service
        .loggedin()
        .then(response => this.setState({ user: response }))
        .catch(err => this.setState({ user: false }));
    }
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <Route
        render={props => (
          <div className="App" data-route={props.location.pathname}>
            <Switch>
              <Route path="/login" render={() => <Login />} />
            </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;
