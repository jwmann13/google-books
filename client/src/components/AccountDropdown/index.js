import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../App";

function AccountDropdown() {
  return (
    <UserConsumer>
      {({ user, logout }) => {
        return (
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {!user ? "Account" : user.username}
            </button>
            {!user ? (
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/register" className="dropdown-item">
                  Register
                </Link>
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
              </div>
            ) : (
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="#" className="dropdown-item">
                  Dashboard
                </Link>
                <button className="dropdown-item" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </li>
        );
      }}
    </UserConsumer>
  );
}

export default AccountDropdown;
