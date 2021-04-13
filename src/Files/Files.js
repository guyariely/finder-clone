import { useState } from "react";
import { useDoubleClick, useContextMenu } from "../Hooks/hooks";
import File from "../File/File";
import ContextMenu from "../ContextMenu/ContextMenu";
import "./Files.scss";

function Files(props) {
  const [activeFile, setActiveFile] = useState("");
  const [isFileDoubleClick, registerFileClick] = useDoubleClick(300);
  const contextMenu = useContextMenu("files");

  const { files, navigateToFolder, openTextEdit } = props;

  function onClickFile(e, name) {
    e.preventDefault();
    setActiveFile(name);
    contextMenu.close();

    const type = files[name].type;
    if (isFileDoubleClick()) {
      type === "folder" ? navigateToFolder(name) : openTextEdit(name);
      setActiveFile("");
    }

    registerFileClick();
  }

  function onClickScreen(e) {
    e.preventDefault();
    if (e.target.id === "files") {
      setActiveFile("");
      contextMenu.close();
    }
  }

  function openNewFileDialog(type) {
    contextMenu.close();
    props.openNewFileDialog(type);
  }

  return (
    <main
      id="files"
      onClick={e => onClickScreen(e)}
      onContextMenu={e => contextMenu.open(e)}
      name="files"
    >
      {contextMenu.isOpen && (
        <ContextMenu
          xPos={contextMenu.position.x}
          yPos={contextMenu.position.y}
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
