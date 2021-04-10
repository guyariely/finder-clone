import React, { Component } from "react";
import ReactSlider from "react-slider";
import "./IconSizeSlider.scss";

class IconSizeSlider extends Component {
  constructor(props) {
    super(props);
    this.chnageIconSize = this.chnageIconSize.bind(this);
    this.state = {
      size: 75,
    };
  }

  chnageIconSize(value) {
    this.setState({ size: value });
    document.documentElement.style.setProperty("--icon-size", value + "px");
  }

  render() {
    return (
      <ReactSlider
        min={55}
        max={160}
        onChange={this.chnageIconSize}
        value={this.state.size}
        className="icons-size-slider"
        thumbClassName="thumb"
        trackClassName="progress"
        markClassName="example-mark"
      />
    );
  }
}

export default IconSizeSlider;
