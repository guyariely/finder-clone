import ContextMenuButton from "../ContextMenuButton/ContextMenuButton";
import "./ContextMenu.scss";

function ContextMenu({ xPos, yPos, openNewFileDialog }) {
  return (
    <div
      className="context-menu"
      style={{ top: `${yPos}px`, left: `${xPos}px` }}
    >
      <ContextMenuButton
        name="New Folder"
        openNewFileDialog={() => openNewFileDialog("folder")}
      />
      <ContextMenuButton
        name="New File"
        openNewFileDialog={() => openNewFileDialog("textfile")}
      />
      <ContextMenuButton name="Get Info" openNewFileDialog={() => {}} />
    </div>
  );
}

export default ContextMenu;
