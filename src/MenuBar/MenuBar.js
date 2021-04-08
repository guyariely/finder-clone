import NavigationControls from "../NavigationControls/NavigationControls";
import WindowControls from "../WindowControls/WindowControls";
import SearchBox from "../SearchBox/SearchBox";
import "./MenuBar.scss";

function MenuBar(props) {
  const {
    searchInput,
    onSearchInputChange,
    navigateBackward,
    navigateForward,
    disableBackButton,
    disableForwardButton,
  } = props;

  return (
    <header id="menu-bar">
      <div className="menu-bar-top">
        <WindowControls />
        <p className="username">🏠 finderclone</p>
      </div>
      <div className="menu-bar-bottom">
        <NavigationControls
          navigateBackward={navigateBackward}
          navigateForward={navigateForward}
          disableBackButton={disableBackButton}
          disableForwardButton={disableForwardButton}
        />
        <SearchBox
          searchInput={searchInput}
          onSearchInputChange={onSearchInputChange}
        />
      </div>
    </header>
  );
}

export default MenuBar;
