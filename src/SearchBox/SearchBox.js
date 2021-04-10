import "./SearchBox.scss";
import { IconContext } from "react-icons";
import { IoSearchOutline } from "react-icons/io5";

function SearchBox({ searchInput, onSearchInputChange }) {
  return (
    <div>
      <IconContext.Provider value={{ className: "search-box-icon" }}>
        <IoSearchOutline />
      </IconContext.Provider>
      <input
        type="text"
        value={searchInput}
        className="search-box"
        name="search-box"
        placeholder="Search"
        onChange={e => onSearchInputChange(e)}
      />
    </div>
  );
}

export default SearchBox;
