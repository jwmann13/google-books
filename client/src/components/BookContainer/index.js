import React, { useState } from "react";
import API from "../../utils/API";

import { Book } from "../index";

function BookContainer() {
  const [books, setBooks] = useState([]);

  API.getBooks()
    .then(response => {
      setBooks(response.data)
    })
    .catch(err => console.log(err));

  const bookCards = books.map((b, i) => {
    if (i % 5 === 4) {
      return (
        <>
          <Book>{b}</Book>
          <div className="w-100"></div>
        </>
      );
    } else {
      return <Book>{b}</Book>;
    }
  });

  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">{bookCards}</div>
    </div>
  );
}

export default BookContainer;
