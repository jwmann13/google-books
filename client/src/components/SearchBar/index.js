import React, { useState } from "react";

import API from "../../utils/API";

function SearchBar(props) {
  const [q, setQ] = useState("");

  function getSearch(e) {
    e.preventDefault();
    API.getSearch({ q })
      .then(response => {
        props.setBooks(response.data);
      })
      .catch(err => console.log(err));
  }

  function changeQ(e) {
    setQ(e.target.value);
  }

  return (
    <form onSubmit={getSearch} className="form-inline mb-3">
      <input
        type="text"
        name="q"
        id="q"
        className="form-control w-30"
        onChange={changeQ}
      />
      <input type="submit" value="Search" className="btn btn-primary ml-2" />
    </form>
  );
}

export default SearchBar;
