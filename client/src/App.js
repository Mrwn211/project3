import React, { Component } from 'react';
import './App.scss';

import {Link, Switch, Route} from 'react-router-dom';

import Popin from './components/Popin.js';

import Signup from './components/auth/Signup.js';
import Login from './components/auth/Login.js';
import Profile from './components/auth/Profile.js';
import AuthService from './components/auth/auth-service.js';

class App extends Component {
  state = {
    user: null
  };

  service = new AuthService();

  fetchUser = () => {
    if (this.state.user === null ) {
      this.service.loggedin()
        .then(response => this.setState({user: response}))
        .catch(err => this.setState({user: false}))
      ;
    }
  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}>

          <Switch>
            <Route exact path="/" render={() => (
              <>
                {this.state.user && this.state.user._id ? (
                  <Profile user={this.state.user} updateUser={this.updateUser} />
                ) : (
                  <Popin one={(
                    <>
                      <h1>IronProfile</h1>
                      <p>Today we will create an app with authorization, adding some cool styles !</p>
          
                      <div className="cta">
                        <Link className="btn" to="/signup">Sign up</Link>
                        <Link className="btn" to="/login">Log in</Link>
                      </div>
                    </>
                  )} />
                )}
              </>
            )} />

            <Route exact path="/signup" render={(props) => (
              <Signup updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/login" render={(props) => (
              <Login updateUser={this.updateUser} history={props.history} />
            )} />
          </Switch>

          

          
        </div>
      )} />
    );
  }
}

export default App;
