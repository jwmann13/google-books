import React, { useState } from "react";
import API from "../../utils/API" 

function Register() {
  const [register, setRegister] = useState({ username: "", email: "", password: "" });

  function createUser(e) {
    e.preventDefault();
    API.createUser(register)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  function updateForm(e) {
    let name = e.target.name;
    let value = e.target.value;
    setRegister({
      ...register,
      [name]: value
    });
  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={createUser}>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Username"
              onChange={updateForm}
            />
          </div>
        </div>
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
  );
}

export default Register;
