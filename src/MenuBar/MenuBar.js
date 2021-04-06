import "./MenuBar.scss";

function MenuBar() {
  return (
    <header id="menu-bar">
      <div class="menu-bar-top">
        <div class="window-controls">
          <button class="window-control close-window"></button>
          <button class="window-control minimize-window"></button>
          <button class="window-control maximize-window"></button>
        </div>
        <p class="username">🏠 finderclone</p>
      </div>
      <div class="menu-bar-bottom">
        <div class="navigation-buttons">
          <div class="back-button active">ᐸ</div>
          <div class="forward-button">ᐳ</div>
        </div>
        <div class="settings-buttons">
          <div class="view-as-button">view as buttons</div>
          <div class="sort-by-button">sort</div>
          <div class="setting-button">sett</div>
          <div class="share-button">share</div>
          <div class="tag-button">tag</div>
        </div>
        <input
          type="text"
          class="search-box"
          name="search-box"
          placeholder="Search"
        />
      </div>
    </header>
  );
}

export default MenuBar;
