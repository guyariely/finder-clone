import { Component } from "react";
import File from "../File/File";
import "./Files.scss";

class Files extends Component {
  constructor(props) {
    super(props);
    this.onClickFile = this.onClickFile.bind(this);
    this.state = {
      activeFile: "",
      lastClick: null,
    };
  }

  onClickFile(e, name) {
    e.preventDefault();
    this.setState({ activeFile: name });
    // handle double click
    const { type } = this.props.files[name];
    if (type === "folder" && this.state.lastClick) {
      const timePassed = new Date().getTime() - this.state.lastClick;
      if (timePassed < 300) {
        this.props.navigateToFolder(name);
        this.setState({ activeFile: "" });
      }
    }
    // register current click time
    this.setState({ lastClick: new Date().getTime() });
  }

  render() {
    const { files } = this.props;

    return (
      <main id="files">
        {Object.keys(files).map(fileName => (
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
