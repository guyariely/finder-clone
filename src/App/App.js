import React, { useState, useEffect } from "react";
import MenuBar from "../MenuBar/MenuBar";
import SideBar from "../Sidebar/Sidebar";
import Files from "../Files/Files";
import StatusBar from "../StatusBar/StatusBar";
import NewFileDialog from "../NewFileDialog/NewFileDialog";
import TextEdit from "../TextEdit/TextEdit";
import { last } from "../utils/utils";
import { root } from "../root";

import "./App.scss";
import "./mojave-wallpaper.jpg";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [backwardHistory, setBackwardHistory] = useState([]);
  const [forwardHistory, setForwardHistory] = useState([]);
  const [newFileDialogOpen, setNewFileDialogOpen] = useState(false);
  const [newFileDialogType, setNewFileDialogType] = useState("folder");
  const [textEditOpen, setTextEditOpen] = useState(false);
  const [textEditFileName, setTextEditFileName] = useState("");
  const [textEditFileText, setTextEditFileText] = useState("");

  useEffect(() => {
    const files = JSON.parse(localStorage.getItem("files"));
    setBackwardHistory([files || root]);
  }, []);

  function onSearchInputChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function navigateToFolder(name) {
    setBackwardHistory(backwardHistory => {
      const currentFolder = last(backwardHistory);
      return [...backwardHistory, currentFolder[name].files];
    });
    setForwardHistory([]);
  }

  function openTextEdit(name) {
    const currentFolder = last(backwardHistory);
    const files = searchInput ? getSearchedFiles(currentFolder) : currentFolder;
    setTextEditOpen(true);
    setTextEditFileName(name);
    setTextEditFileText(files[name].text);
  }

  function closeTextEdit() {
    setTextEditOpen(false);
  }

  function saveChangesToFile(text) {
    setTextEditFileText(text);

    const currentFolder = last(backwardHistory);
    const files = searchInput ? getSearchedFiles(currentFolder) : currentFolder;

    files[textEditFileName].text = text;
    localStorage.setItem("files", JSON.stringify(backwardHistory[0]));
  }

  function navigateBackward() {
    setBackwardHistory(backwardHistory => {
      setForwardHistory(forwardHistory => [
        ...forwardHistory,
        last(backwardHistory),
      ]);
      return backwardHistory.slice(0, backwardHistory.length - 1);
    });
  }

  function navigateForward() {
    setForwardHistory(forwardHistory => {
      setBackwardHistory(backwardHistory => [
        ...backwardHistory,
        last(forwardHistory),
      ]);
      return forwardHistory.slice(0, forwardHistory.length - 1);
    });
  }

  function createNewFile(name) {
    const currentFolder = last(backwardHistory);

    if (newFileDialogType === "folder") {
      currentFolder[name] = { type: "folder", files: {} };
    } else {
      currentFolder[name] = { type: "textfile", text: "" };
    }

    setBackwardHistory(backwardHistory => [
      ...backwardHistory.slice(0, backwardHistory.length - 1),
      currentFolder,
    ]);

    setNewFileDialogOpen(false);
    localStorage.setItem("files", JSON.stringify(backwardHistory[0]));
  }

  function getSearchedFiles(folder) {
    let files = {};
    for (const fileName in folder) {
      if (
        folder[fileName].type === "textfile" &&
        fileName.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        files[fileName] = folder[fileName];
      } else {
        files = { ...files, ...getSearchedFiles(folder[fileName].files) };
      }
    }
    return files;
  }

  function openNewFileDialog(type) {
    // user should not be able to add files when searching files
    if (!searchInput) {
      setNewFileDialogOpen(true);
      setNewFileDialogType(type);
    }
  }

  function navigateToFavorite(folderName) {
    const root = backwardHistory[0];
    const homeDirectory = root["Home"];
    const folder =
      folderName === "Home" ? homeDirectory : homeDirectory.files[folderName];

    setBackwardHistory(backwardHistory => [...backwardHistory, folder.files]);
    setForwardHistory([]);
  }

  const currentFolder = last(backwardHistory);
  const files = searchInput ? getSearchedFiles(currentFolder) : currentFolder;

  const filesNames = Object.keys(files || {});

  const filesCount = filesNames.length;
  const textfilesCount = filesNames.filter(
    fileName => files[fileName].type === "textfile"
  ).length;

  const favorites = ["Home", "Documents", "Downloads", "Desktop"];

  return (
    <div id="window">
      <TextEdit
        isModalOpen={textEditOpen}
        text={textEditFileText}
        name={textEditFileName}
        saveChangesToFile={name => saveChangesToFile(name)}
        closeTextEdit={() => closeTextEdit()}
      />
      <NewFileDialog
        modalIsOpen={newFileDialogOpen}
        fileType={newFileDialogType}
        onClickCancel={() => setNewFileDialogOpen(false)}
        onClickSave={name => createNewFile(name)}
      />
      <div id="finder">
        <MenuBar
          searchInput={searchInput}
          onSearchInputChange={e => onSearchInputChange(e)}
          navigateBackward={() => navigateBackward()}
          navigateForward={() => navigateForward()}
          disableBackButton={backwardHistory.length <= 1}
          disableForwardButton={forwardHistory.length === 0}
        />
        <SideBar
          favorites={favorites}
          navigateToFavorite={folderName => navigateToFavorite(folderName)}
        />
        <Files
          files={files}
          navigateToFolder={name => navigateToFolder(name)}
          openTextEdit={name => openTextEdit(name)}
          openNewFileDialog={type => openNewFileDialog(type)}
        />
        <StatusBar filesCount={filesCount} textFilesCount={textfilesCount} />
      </div>
    </div>
  );
}

export default App;
