import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="text"
        className="search-box"
        name="search-box"
        placeholder="Search"
      />
    );
  }
}

export default SearchBox;
