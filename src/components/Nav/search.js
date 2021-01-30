import React, { useState } from "react";
import { Button } from "@material-ui/core";
const Search = ({ handleNewSearch }) => {
  const [searchText, setSearchText] = useState("headlines");

  function clearSearchField() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" && searchText) {
      handleNewSearch(searchText.toLowerCase());
      clearSearchField();
    }
  }

  return (
    <div className="search">
      <i class="fa fa-search icon"></i>
      <input
        style={{ flex: 1, margin: "0 20px 0 0", color: "black" }}
        placeholder="Search for News Stories"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {/* <input onChange={(e) => setSearchText(e.target.value)}></input> */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          searchText && handleNewSearch(searchText.toLowerCase());
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
