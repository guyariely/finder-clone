import "./FavoriteFolder.scss";
import { IconContext } from "react-icons";
import { BiFolder } from "react-icons/bi";

function FavoriteFolder({ name, navigateToFavorite, currentFolderName }) {
  const isActive = currentFolderName === name;

  return (
    <div className={`favorites-folder ${isActive ? "active" : ""}`}>
      <IconContext.Provider value={{ className: "favorites-folder-icon" }}>
        <BiFolder />
      </IconContext.Provider>
      <button
        className="favorites-folder-name"
        onClick={() => navigateToFavorite(name)}
      >
        {name}
      </button>
    </div>
  );
}

export default FavoriteFolder;
