import "./NavigationControls.scss";

function NavigationControls(props) {
  const {
    navigateBackward,
    navigateForward,
    disableBackButton,
    disableForwardButton,
  } = props;

  return (
    <div className="navigation-controls">
      <button
        disabled={disableBackButton}
        onClick={() => navigateBackward()}
        className="active back-button"
      >
        ᐸ
      </button>
      <button
        disabled={disableForwardButton}
        onClick={() => navigateForward()}
        className="forward-button"
      >
        ᐳ
      </button>
    </div>
  );
}

export default NavigationControls;
