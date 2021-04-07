import IconSizeSlider from "../IconSizeSlider/IconSizeSlider";
import "./StatusBar.scss";
import { getRandom } from "../utils/utils";

function StatusBar({ filesCount, textFilesCount }) {
  const randomSize = getRandom(0.15, 3);
  const sizeTotal = Math.round(textFilesCount * randomSize * 100) / 100;

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
