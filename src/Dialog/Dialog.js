import Modal from "react-modal";
import "./Dialog.scss";

function Dialog({ modalIsOpen, closeModal, children }) {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="dialog"
      overlayClassName="dialog-overlay"
      shouldCloseOnOverlayClick={false}
    >
      {children}
    </Modal>
  );
}

export default Dialog;
