import React, { Component } from "react";
import "./IconSizeSlider.scss";

class IconSizeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 12,
    };
  }

  render() {
    return (
      <input
        type="range"
        className="icons-size-slider"
        name="icons-size-slider"
        min="4"
        max="20"
        value={this.state.size}
        onChange={e => this.setState({ size: e.target.value })}
      />
    );
  }
}

export default IconSizeSlider;
