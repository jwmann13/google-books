import React from "react";

import "./index.css";

function Book(props) {
  return (
    <div className="col-4 p-0 d-flex align-items-stretch">
      <div className="card">
        <div className="card-header text-center">
          <h1 className="display-6">{props.children.title}</h1>
        </div>
        <img src={props.children.image} alt="book" className="" />
        <div className="card-body">
          <h5 className="card-title display-6 text-muted">
            by {props.children.authors.join(", ")}
          </h5>
          <p className="card-body">{props.children.description}</p>
          <a href={props.children.link} className="card-link">
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Book;
