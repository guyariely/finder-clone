import ContextMenuButton from "../ContextMenuButton/ContextMenuButton";
import "./ContextMenu.scss";

function ContextMenu({ xPos, yPos }) {
  return (
    <div
      className="context-menu"
      style={{ top: `${yPos}px`, left: `${xPos}px` }}
    >
      <ContextMenuButton name="New Folder" />
      <ContextMenuButton name="New File" />
      <ContextMenuButton name="Get Info" />
    </div>
  );
}

export default ContextMenu;
