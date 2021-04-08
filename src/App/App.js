import React, { Component } from "react";
import MenuBar from "../MenuBar/MenuBar";
import SideBar from "../Sidebar/Sidebar";
import Files from "../Files/Files";
import StatusBar from "../StatusBar/StatusBar";

import { last } from "../utils/utils";

import { files } from "../dummy_files_object";
import NewFileDialog from "../NewFileDialog/NewFileDialog";

import "./App.scss";
import "./mojave-wallpaper.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.navigateToFolder = this.navigateToFolder.bind(this);
    this.navigateBackward = this.navigateBackward.bind(this);
    this.navigateForward = this.navigateForward.bind(this);
    this.createNewFile = this.createNewFile.bind(this);
    this.openNewFileDialog = this.openNewFileDialog.bind(this);

    this.state = {
      searchInput: "",
      backwardHistory: [],
      forwardHistory: [],
      modalIsOpen: false,
      modalFileType: "folder",
    };
  }

  componentDidMount() {
    const files = JSON.parse(localStorage.getItem("files"));
    this.setState({ backwardHistory: [files] });
  }

  onSearchInputChange(e) {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
  }

  navigateToFolder(name) {
    this.setState(state => {
      const { backwardHistory } = state;
      const currentFolder = last(backwardHistory);
      return {
        backwardHistory: [...backwardHistory, currentFolder[name].files],
        forwardHistory: [],
      };
    });
  }

  navigateBackward() {
    this.setState(state => {
      const { backwardHistory, forwardHistory } = state;
      return {
        backwardHistory: backwardHistory.slice(0, backwardHistory.length - 1),
        forwardHistory: [...forwardHistory, last(backwardHistory)],
      };
    });
  }

  navigateForward() {
    this.setState(state => {
      const { backwardHistory, forwardHistory } = state;
      return {
        forwardHistory: forwardHistory.slice(0, forwardHistory.length - 1),
        backwardHistory: [...backwardHistory, last(forwardHistory)],
      };
    });
  }

  createNewFile(name) {
    const { backwardHistory } = this.state;
    const currentFolder = last(backwardHistory);

    if (this.state.modalFileType === "folder") {
      currentFolder[name] = { type: "folder", files: {} };
    } else {
      currentFolder[name] = { type: "textfile" };
    }

    this.setState({
      backwardHistory: [
        ...backwardHistory.slice(0, backwardHistory.length - 1),
        currentFolder,
      ],
    });

    this.setState({ modalIsOpen: false });
    localStorage.setItem(
      "files",
      JSON.stringify(this.state.backwardHistory[0])
    );
  }

  getSearchedFiles(folder) {
    let files = {};
    for (const fileName in folder) {
      if (
        folder[fileName].type === "textfile" &&
        fileName.toLowerCase().includes(this.state.searchInput.toLowerCase())
      ) {
        files[fileName] = folder[fileName];
      } else {
        files = { ...files, ...this.getSearchedFiles(folder[fileName].files) };
      }
    }
    return files;
  }

  openNewFileDialog(type) {
    // user should not be able to add files when searching files
    if (!this.state.searchInput) {
      this.setState({
        modalIsOpen: true,
        modalFileType: type,
      });
    }
  }

  render() {
    const currentFolder = last(this.state.backwardHistory);
    const files = this.state.searchInput
      ? this.getSearchedFiles(currentFolder)
      : currentFolder;

    const filesNames = Object.keys(files || {});

    const filesCount = filesNames.length;
    const textfilesCount = filesNames.filter(
      fileName => files[fileName].type === "textfile"
    ).length;

    return (
      <div id="window">
        <NewFileDialog
          modalIsOpen={this.state.modalIsOpen}
          fileType={this.state.modalFileType}
          onClickCancel={() => this.setState({ modalIsOpen: false })}
          onClickSave={this.createNewFile}
        />
        <div id="finder">
          <MenuBar
            searchInput={this.state.searchInput}
            onSearchInputChange={this.onSearchInputChange}
            navigateBackward={this.navigateBackward}
            navigateForward={this.navigateForward}
            disableBackButton={this.state.backwardHistory.length <= 1}
            disableForwardButton={this.state.forwardHistory.length === 0}
          />
          <SideBar />
          <Files
            files={files}
            navigateToFolder={this.navigateToFolder}
            openNewFileDialog={this.openNewFileDialog}
          />
          <StatusBar filesCount={filesCount} textFilesCount={textfilesCount} />
        </div>
      </div>
    );
  }
}

export default App;
