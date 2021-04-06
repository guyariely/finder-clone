import IconSizeSlider from "../IconSizeSlider/IconSizeSlider";
import "./StatusBar.scss";

function StatusBar() {
  return (
    <footer id="status-bar">
      <span className="ghost-flex-item"></span>
      <p className="finder-details">8 items, 6.54 GB available</p>
      <IconSizeSlider />
    </footer>
  );
}

export default StatusBar;
