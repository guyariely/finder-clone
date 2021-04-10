import FavoriteFolder from "../FavoriteFolder/FavoriteFolder";
import "./Sidebar.scss";

function SideBar({ favorites, navigateToFavorite, currentFolderName }) {
  return (
    <aside id="sidebar">
      <h5 className="favorites">Favorites</h5>
      <div className="favorites-folders">
        {favorites.map(favorite => (
          <FavoriteFolder
            navigateToFavorite={navigateToFavorite}
            name={favorite}
            key={favorite}
            currentFolderName={currentFolderName}
          />
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
