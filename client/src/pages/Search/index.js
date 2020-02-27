import React from "react";
import API from "../../utils/API";

function Search() {
  API.getBooks()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  return <h1>SEARCH</h1>;
}

export default Search;
