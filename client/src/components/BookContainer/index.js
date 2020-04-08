import React from "react";
import { Book } from "../index";

function BookContainer(props) {
  let bookCards = [];
  if (props.books) {
    bookCards = props.books.map((b, i) => {
      if (i % 3 === 2) {
        return (
          <React.Fragment key={b.id}>
            <Book key={b.id}>{b}</Book>
            <div className="w-100"></div>
          </React.Fragment>
        );
      } else {
        return <Book key={b.id}>{b}</Book>;
      }
    });
  }

  return <div className="card-group">{bookCards}</div>;
}

export default BookContainer;
