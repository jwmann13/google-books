import React, { useState } from "react";

import { Book, SearchBar } from "../index";

function BookContainer() {
  const [books, setBooks] = useState([]);

  let bookCards = [];
  if (books !== []) {
    bookCards = books.map((b, i) => {
      if (i % 3 === 2) {
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
  } else {
    bookCards = []
  }

  return (
    <div className="container">
      <div className="row"><SearchBar setBooks={setBooks}/></div>
      <div className="row">{bookCards}</div>
    </div>
  );
}

export default BookContainer;
