import React, { Component } from "react";
import "./SettingsControls.scss";

class SettingsControls extends Component {
  render() {
    return (
      <div className="settings-controls">
        <div className="view-as-button">view as buttons</div>
        <div className="sort-by-button">sort</div>
        <div className="setting-button">sett</div>
        <div className="share-button">share</div>
        <div className="tag-button">tag</div>
      </div>
    );
  }
}

export default SettingsControls;
