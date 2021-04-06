import "./Sidebar.scss";

function SideBar() {
  return (
    <aside id="sidebar">
      <h5 class="favorites">Favorites</h5>
      <div class="favorites-folders">
        <p class="favorites-folder">&#128193; finderclone</p>
        <p class="favorites-folder">&#128193; Documents</p>
        <p class="favorites-folder active">&#128193; Desktop</p>
        <p class="favorites-folder">&#128193; Downloads</p>
      </div>
    </aside>
  );
}

export default SideBar;
