import React, { useState } from "react";
import { UserConsumer } from "../../App";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  function updateForm(e) {
    let name = e.target.name;
    let value = e.target.value;
    setCredentials({
      ...credentials,
      [name]: value
    });
  }

  return (
    <UserConsumer>
      {({ login }) => (
        <div className="container">
          <form className="mt-5" onSubmit={e => login(e, credentials)}>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={updateForm}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={updateForm}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </UserConsumer>
  );
}

export default Login;
