import "./StatusBar.scss";

function StatusBar() {
  return (
    <footer id="status-bar">
      <span class="ghost-flex-item"></span>
      <p class="finder-details">8 items, 6.54 GB available</p>
      <input
        type="range"
        class="icons-size-slider"
        name="icons-size-slider"
        min="4"
        max="20"
      />
    </footer>
  );
}

export default StatusBar;
