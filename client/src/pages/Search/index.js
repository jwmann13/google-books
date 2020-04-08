import React, { useState } from "react";
import API from "../../utils/API";
import { BookContainer, SearchBar, AdvancedSearch } from "../../components";

function Search() {
  const [query, setQuery] = useState({
    q: "",
    author: "",
    title: "",
    publisher: "",
    subject: "",
    iter: 0
  });
  const [books, setBooks] = useState(null);
  const [searchBool, setSearchBool] = useState(false);

  function changeQuery(e) {
    console.log(query);
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  }

  function getSearch(e) {
    e.preventDefault();

    API.getSearch(query)
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(err => console.log(err));
  }

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
      <BookContainer books={books} />
    </div>
  );
}

export default Search;
