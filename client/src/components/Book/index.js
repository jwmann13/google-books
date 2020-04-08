import React from "react";

import ReadMore from "../ReadMore";
import "./index.css";

function Book(props) {
  const { id, title, image, authors, description, link } = props.children;
  let authorStr = "";
  if (authors) authorStr = authors !== [] ? authors.join(", ") : "no listed authors!";
  else authorStr = "no listed authors!";

  return (
    <div className="card" key={id}>
        <div className="card-header d-flex align-items-center justify-content-center">
          <h1 className="display-6">{title}</h1>
        </div>
        <img src={image} alt="book" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title display-6 text-muted">
            by {authorStr}
          </h5>
          <ReadMore key={id}>{description}</ReadMore>
          <a href={link} className="card-link">
            Link
          </a>
        </div>
      </div>
  );
}

export default Book;
