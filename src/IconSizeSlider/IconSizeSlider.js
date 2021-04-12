import { useState } from "react";
import ReactSlider from "react-slider";
import "./IconSizeSlider.scss";

function IconSizeSlider() {
  const [size, setSize] = useState(75);

  function changeIconSize(value) {
    setSize(value);
    document.documentElement.style.setProperty("--icon-size", value + "px");
  }

  return (
    <ReactSlider
      min={55}
      max={160}
      onChange={value => changeIconSize(value)}
      value={size}
      className="icons-size-slider"
      thumbClassName="thumb"
      trackClassName="progress"
    />
  );
}

export default IconSizeSlider;
