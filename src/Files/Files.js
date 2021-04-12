import { useState } from "react";
import File from "../File/File";
import "./Files.scss";
import ContextMenu from "../ContextMenu/ContextMenu";

function Files(props) {
  const [activeFile, setActiveFile] = useState("");
  const [lastClick, setLastClick] = useState(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: null,
    y: null,
  });

  function onClickFile(e, name) {
    e.preventDefault();
    setActiveFile(name);
    setShowContextMenu(false);
    // handle double click
    const { type } = props.files[name];
    if (lastClick) {
      const timePassed = new Date().getTime() - lastClick;
      if (timePassed < 300) {
        type === "folder"
          ? props.navigateToFolder(name)
          : props.openTextEdit(name);

        setActiveFile("");
      }
    }
    // register current click time
    setLastClick(new Date().getTime());
  }

  function onClickScreen(e) {
    e.preventDefault();
    if (e.target.id === "files") {
      setActiveFile("");
      setShowContextMenu(false);
    }
  }

  function onRightClickScreen(e) {
    e.preventDefault();
    if (e.target.id === "files") {
      setShowContextMenu(true);
      setContextMenuPosition({ x: e.pageX, y: e.pageY });
    }
  }

  function openNewFileDialog(type) {
    setShowContextMenu(false);
    props.openNewFileDialog(type);
  }

  const { files } = props;

  return (
    <main
      id="files"
      onClick={e => onClickScreen(e)}
      onContextMenu={e => onRightClickScreen(e)}
    >
      {showContextMenu && (
        <ContextMenu
          xPos={contextMenuPosition.x}
          yPos={contextMenuPosition.y}
          openNewFileDialog={type => openNewFileDialog(type)}
        />
      )}
      {files &&
        Object.keys(files).map(fileName => (
          <File
            isActive={fileName === activeFile}
            onClickFile={e => onClickFile(e, fileName)}
            key={fileName}
            name={fileName}
            type={files[fileName].type}
          />
        ))}
    </main>
  );
}

export default Files;
