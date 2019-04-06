import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import "./App.scss";
import "bulma/css/bulma.css";

import Login from "./components/auth/Login.js";
import AuthService from "./components/auth/auth-service.js";

import Day from "./components/Day.js";
import KidCard from "./components/KidCard.js";
import PageAdmin from "./components/pages/PageAdmin";

// import Signup from "./components/auth/Signup.js";
// import Profile from "./components/auth/Profile.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle);

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
              <Route path="/day" render={() => <Day />} />
              <Route path="/admin" render={() => <PageAdmin />} />
            </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;
