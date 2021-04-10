import IconSizeSlider from "../IconSizeSlider/IconSizeSlider";
import "./StatusBar.scss";

function StatusBar({ filesCount, textFilesCount }) {
  const sizeTotal = Math.round(textFilesCount * 0.75 * 100) / 100;

  return (
    <footer id="status-bar">
      <span className="ghost-flex-item"></span>
      <p className="finder-details">
        {filesCount} items, {sizeTotal} MB total
      </p>
      <IconSizeSlider />
    </footer>
  );
}

export default StatusBar;
