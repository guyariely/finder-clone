import Modal from "../Modal/Modal";
import WindowControls from "../WindowControls/WindowControls";
import "./TextEdit.scss";

function TextEdit(props) {
  const { saveChangesToFile, closeTextEdit, isModalOpen, name, text } = props;

  return (
    <Modal modalIsOpen={isModalOpen}>
      <div className="text-edit">
        <header className="toolbar">
          <WindowControls onClickClose={closeTextEdit} />
          <p className="file-name">📄 {name}</p>
        </header>
        <main className="text-edit-body">
          <textarea
            onChange={e => saveChangesToFile(e.target.value)}
            value={text}
            className="text-edit-editor"
          ></textarea>
        </main>
      </div>
    </Modal>
  );
}

export default TextEdit;
