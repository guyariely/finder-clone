import "./ContextMenuButton.scss";

function ContextMenuButton({ name }) {
  return (
    <div className={`context-menu-button-wrapper ${name}`}>
      <button className={`context-menu-button ${name}`}>{name}</button>
    </div>
  );
}

export default ContextMenuButton;
