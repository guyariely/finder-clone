import { Component } from "react";
import Dialog from "../Dialog/Dialog";
import DialogButton from "../DialogButton/DialogButton";
import "./NewFileDialog.scss";

class NewFileDialog extends Component {
  constructor(props) {
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      fileNameInput: "",
    };
  }

  onClickSave() {
    this.props.onClickSave(this.state.fileNameInput);
    this.setState({ fileNameInput: "" });
  }

  render() {
    const { modalIsOpen, closeModal, fileType, onClickCancel } = this.props;

    return (
      <Dialog modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div className="new-file-dialog">
          <header className="toolbar">Create New File</header>
          <main className="dialog-body">
            <label className="file-name-label">
              {fileType === "folder" ? "Folder" : "Text File"} Name:
            </label>
            <input
              value={this.state.fileNameInput}
              type="text"
              className="file-name-input"
              onChange={e => this.setState({ fileNameInput: e.target.value })}
            ></input>
            <div className="dialog-buttons">
              <DialogButton
                onClickButton={onClickCancel}
                className="cancel"
                title="Cancel"
              />
              <DialogButton
                onClickButton={this.onClickSave}
                className="save"
                title="Save"
              />
            </div>
          </main>
        </div>
      </Dialog>
    );
  }
}

export default NewFileDialog;
