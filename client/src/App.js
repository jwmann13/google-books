import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Saved, Search, Register } from "./pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/saved" className="nav-link">
                  Saved <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
