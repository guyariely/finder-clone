import React, { Component } from "react";
import "./IconSizeSlider.scss";

class IconSizeSlider extends Component {
  render() {
    return (
      <input
        type="range"
        className="icons-size-slider"
        name="icons-size-slider"
        min="4"
        max="20"
      />
    );
  }
}

export default IconSizeSlider;
