import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";
import { IconContext } from "react-icons";
import "./WindowControls.scss";

function WindowControls({ onClickClose, onClickMinimize, onClickMaximize }) {
  return (
    <div className="window-controls">
      <button
        onClick={() => onClickClose && onClickClose()}
        className="window-control close-window"
      >
        <IconContext.Provider value={{ className: "window-control-icon" }}>
          <GrFormClose />
        </IconContext.Provider>
      </button>
      <button
        onClick={() => onClickMinimize && onClickMinimize()}
        className="window-control minimize-window"
      >
        <IconContext.Provider value={{ className: "window-control-icon" }}>
          <GrFormSubtract />
        </IconContext.Provider>
      </button>
      <button
        onClick={() => onClickMaximize && onClickMaximize()}
        className="window-control maximize-window"
      >
        <IconContext.Provider value={{ className: "window-control-icon" }}>
          <CgExpand />
        </IconContext.Provider>
      </button>
    </div>
  );
}

export default WindowControls;
