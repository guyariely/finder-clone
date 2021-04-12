import { useState } from "react";
import Modal from "../Modal/Modal";
import DialogButton from "../DialogButton/DialogButton";
import "./NewFileDialog.scss";

function NewFileDialog(props) {
  const { modalIsOpen, closeModal, fileType, onClickCancel } = props;

  const [fileNameInput, setFileNameInput] = useState("");

  function onClickSave() {
    props.onClickSave(fileNameInput);
    setFileNameInput("");
  }

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className="new-file-dialog">
        <header className="toolbar">Create New File</header>
        <main className="dialog-body">
          <label className="file-name-label">
            {fileType === "folder" ? "Folder" : "Text File"} Name:
          </label>
          <input
            value={fileNameInput}
            type="text"
            className="file-name-input"
            onChange={e => setFileNameInput(e.target.value)}
          ></input>
          <div className="dialog-buttons">
            <DialogButton
              onClickButton={onClickCancel}
              className="cancel"
              title="Cancel"
            />
            <DialogButton
              onClickButton={() => onClickSave()}
              className="save"
              title="Save"
            />
          </div>
        </main>
      </div>
    </Modal>
  );
}

export default NewFileDialog;
