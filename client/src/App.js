import React, { Component, createContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Saved, Search, Register, Login } from "./pages";
import { AccountDropdown } from "./components";
import API from "./utils/API";
import "./App.css";

const UserContext = createContext();
export const UserConsumer = UserContext.Consumer;

class App extends Component {
  constructor(props) {
    super(props);

    this.login = (e, credentials) => {
      e.preventDefault();
      API.login(credentials)
        .then(response => this.setState({ user: response.data }))
        .catch(err => console.log(err));
    };

    this.logout = e => {
      e.preventDefault();
      API.logout()
        .then(() => this.setState({ user: null }))
        .catch(err => console.log(err));
    };

    this.state = {
      user: null,
      login: this.login,
      logout: this.logout
    };

    this.login.bind(this);
    this.logout.bind(this);
  }

  componentDidMount() {
    API.currentUser().then(response => this.setState({ user: response.data }));
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/saved" className="nav-link">
                    Saved <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <AccountDropdown />
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
