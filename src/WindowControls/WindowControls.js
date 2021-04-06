import "./WindowControls.scss";

function WindowControls() {
  return (
    <div className="window-controls">
      <button className="window-control close-window"></button>
      <button className="window-control minimize-window"></button>
      <button className="window-control maximize-window"></button>
    </div>
  );
}

export default WindowControls;
