import "./SearchBox.scss";

function SearchBox({ searchInput, onSearchInputChange }) {
  return (
    <input
      type="text"
      value={searchInput}
      className="search-box"
      name="search-box"
      placeholder="Search"
      onChange={e => onSearchInputChange(e)}
    />
  );
}

export default SearchBox;
