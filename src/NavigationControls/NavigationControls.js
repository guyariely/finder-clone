import React, { Component } from "react";
import "./NavigationControls.scss";

class NavigationControls extends Component {
  render() {
    return (
      <div className="navigation-controls">
        <div className="back-button">ᐸ</div>
        <div className="forward-button">ᐳ</div>
      </div>
    );
  }
}

export default NavigationControls;
