import "./ContextMenuButton.scss";

function ContextMenuButton({ name, openNewFileDialog }) {
  return (
    <div
      className={`context-menu-button-wrapper ${name}`}
      onClick={() => openNewFileDialog()}
    >
      <button className={`context-menu-button ${name}`}>{name}</button>
    </div>
  );
}

export default ContextMenuButton;
