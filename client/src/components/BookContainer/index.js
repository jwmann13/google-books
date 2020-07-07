import React from "react";
import { Book } from "../index";

function BookContainer(props) {
  let bookCards = [];

  if (!props.book) {
    bookCards = (<p>Search for something</p>)
  } else if (Object.keys(props.books) === 0) {
    bookCards = (<p>No books match!</p>)
  } else if(props.books) {
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
  console.log(bookCards)

  return bookCards
}

export default BookContainer;
