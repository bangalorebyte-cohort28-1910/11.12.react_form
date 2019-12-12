import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from "./components/RegisterForm";

export class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>Company Name</Link>
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="form-outer">
            <div className="form-inner">
              <Switch>
                <Route exact path='/' component={LoginForm} />
                <Route path='/sign-in' component={LoginForm} />
                <Route path='/sign-up' component={RegisterForm} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App

