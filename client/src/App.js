import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import "./App.scss";
import "bulma-calendar/dist/css/bulma-calendar.min.css";
//import "bulma-timeline/dist/css/bulma-timeline.css";

import Signup from "./components/auth/Signup.js";
import Login from "./components/auth/Login.js";
import AuthService from "./components/auth/auth-service.js";

import Day from "./components/Day.js";
import PageAdmin from "./components/pages/PageAdmin.js";
import AddKid from "./components/AddKid.js";
import FillDay from "./components/FillDay.js";
import Timeline from "./components/pages/Timeline.js";

// import Profile from "./components/auth/Profile.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faUser,
  faEnvelope,
  faUpload,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/NavBar";
import PageChooseKid from "./components/pages/PageChooseKid";

library.add(faPlusCircle, faUser, faEnvelope, faUpload, faClock);

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
              <Route path="/signup" render={() => <Signup />} />
              <Route path="/day" render={() => <Day />} />
              <Route path="/admin" render={() => <PageAdmin />} />
              <Route path="/addkid" render={() => <AddKid />} />
              <Route path="/choose-kid" render={() => <PageChooseKid />} />
              <Route path="/fill-day" render={() => <FillDay />} />
              <Route path="/timeline" render={() => <Timeline />} />
            </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;
