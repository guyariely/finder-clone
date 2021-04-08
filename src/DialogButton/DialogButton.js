import "./DialogButton.scss";

function DialogButton({ className, title, onClickButton }) {
  return (
    <button
      onClick={e => onClickButton(e)}
      className={`dialog-button ${className}`}
    >
      {title}
    </button>
  );
}

export default DialogButton;
