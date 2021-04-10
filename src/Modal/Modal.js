import ReactModal from "react-modal";
import "./Modal.scss";

function Modal({ modalIsOpen, closeModal, children }) {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-overlay"
      shouldCloseOnOverlayClick={false}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
