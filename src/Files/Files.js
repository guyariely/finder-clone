import { Component } from "react";
import File from "../File/File";
import "./Files.scss";
import ContextMenu from "../ContextMenu/ContextMenu";

class Files extends Component {
  constructor(props) {
    super(props);
    this.onClickFile = this.onClickFile.bind(this);
    this.openNewFileDialog = this.openNewFileDialog.bind(this);
    this.state = {
      activeFile: "",
      lastClick: null,
      showContextMenu: false,
      contextMenuPosition: { x: null, y: null },
    };
  }

  onClickFile(e, name) {
    e.preventDefault();
    this.setState({ activeFile: name, showContextMenu: false });
    // handle double click
    const { type } = this.props.files[name];
    if (this.state.lastClick) {
      const timePassed = new Date().getTime() - this.state.lastClick;
      if (timePassed < 300) {
        type === "folder"
          ? this.props.navigateToFolder(name)
          : this.props.openTextEdit(name);

        this.setState({ activeFile: "" });
      }
    }
    // register current click time
    this.setState({ lastClick: new Date().getTime() });
  }

  onClickScreen(e) {
    e.preventDefault();
    if (e.target.id === "files") {
      this.setState({ activeFile: "", showContextMenu: false });
    }
  }

  onRightClickScreen(e) {
    e.preventDefault();
    if (e.target.id === "files") {
      this.setState({
        showContextMenu: true,
        contextMenuPosition: { x: e.pageX, y: e.pageY },
      });
    }
  }

  openNewFileDialog(type) {
    this.setState({ showContextMenu: false });
    this.props.openNewFileDialog(type);
  }

  render() {
    const { files } = this.props;

    return (
      <main
        id="files"
        onClick={e => this.onClickScreen(e)}
        onContextMenu={e => this.onRightClickScreen(e)}
      >
        {this.state.showContextMenu && (
          <ContextMenu
            xPos={this.state.contextMenuPosition.x}
            yPos={this.state.contextMenuPosition.y}
            openNewFileDialog={this.openNewFileDialog}
          />
        )}
        {files &&
          Object.keys(files).map(fileName => (
            <File
              isActive={fileName === this.state.activeFile}
              onClickFile={this.onClickFile}
              key={fileName}
              name={fileName}
              type={files[fileName].type}
            />
          ))}
      </main>
    );
  }
}

export default Files;
