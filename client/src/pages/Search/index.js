import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Book, SearchBar, AdvancedSearch } from "../../components";

function Search() {
  const [query, setQuery] = useState({
    q: "",
    author: "",
    title: "",
    publisher: "",
    subject: ""
  });
  const [iter] = useState(0);
  const [books, setBooks] = useState(null);
  const [searchBool, setSearchBool] = useState(false);

  function changeQuery(e) {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  }

  function getSearch(e) {
    e.preventDefault();

    API.getSearch(query, iter)
      .then(response => {
        setBooks(response.data);
      })
      .catch(err => console.log(err));
  }

  function BookContainer() {
    console.log(books)
    if (Object.keys(books) === 0) {
      return (<p>No books match!</p>)
    } else if (books) {
      return books.map((b, i) => {
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
  }

//  useEffect(() => {
//     API.getSearch(query, iter)
//       .then(response => {
//         setBooks(response.data);
//       })
//       .catch(err => console.log(err));
//   }, [query, iter]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-4">Search</h1>
      </div>
      <div className="row">
        {searchBool ? (
          <AdvancedSearch getSearch={getSearch} changeQuery={changeQuery} />
        ) : (
          <SearchBar getSearch={getSearch} changeQuery={changeQuery} />
        )}
      </div>
      <div className="row">
        <button
          className="btn btn-link"
          onClick={() => setSearchBool(!searchBool)}
        >
          {searchBool ? "Close" : "Advanced Search"}
        </button>
      </div>
      {books ? BookContainer() : (<p>Search for something</p>)}
    </div>
  );
}

export default Search;
