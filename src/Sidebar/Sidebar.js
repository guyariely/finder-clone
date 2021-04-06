import FavoriteFolder from "../FavoriteFolder/FavoriteFolder";
import "./Sidebar.scss";

function SideBar() {
  return (
    <aside id="sidebar">
      <h5 className="favorites">Favorites</h5>
      <div className="favorites-folders">
        <FavoriteFolder name="finderclone" />
        <FavoriteFolder name="Documents" />
        <FavoriteFolder name="Desktop" />
        <FavoriteFolder name="Downloads" />
      </div>
    </aside>
  );
}

export default SideBar;
