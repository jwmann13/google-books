import React from "react";

function SearchBar(props) {
  return (
    <form onSubmit={props.getSearch} className="form-inline mb-3">
      <input
        type="text"
        name="q"
        id="q"
        className="form-control w-30"
        onChange={props.changeQuery}
      />
      <input type="submit" value="Search" className="btn btn-primary ml-2" />
    </form>
  );
}

export default SearchBar;
