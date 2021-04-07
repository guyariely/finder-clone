import React, { Component } from "react";
import MenuBar from "../MenuBar/MenuBar";
import SideBar from "../Sidebar/Sidebar";
import Files from "../Files/Files";
import StatusBar from "../StatusBar/StatusBar";
import "./App.scss";
import "./mojave-wallpaper.jpg";
import { last } from "../utils/utils";

import { files } from "../dummy_files_object";

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.navigateToFolder = this.navigateToFolder.bind(this);
    this.navigateBackward = this.navigateBackward.bind(this);
    this.navigateForward = this.navigateForward.bind(this);
    this.state = {
      searchInput: "",
      backwardHistory: [files],
      forwardHistory: [],
    };
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

  render() {
    return (
      <div id="window">
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
            files={last(this.state.backwardHistory)}
            navigateToFolder={this.navigateToFolder}
          />
          <StatusBar
            filesCount={Object.keys(last(this.state.backwardHistory)).length}
            textFilesCount={
              Object.keys(last(this.state.backwardHistory)).filter(
                fileName =>
                  last(this.state.backwardHistory)[fileName].type === "textfile"
              ).length
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
