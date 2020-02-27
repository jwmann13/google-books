import React from "react";

function SearchBar() {
    return (
        <form action="" method="get">
            <input type="text" name="search" id="search" />
            <input type="submit" value="Search" className="btn btn-primary"/>
        </form>
    );
}

export default SearchBar