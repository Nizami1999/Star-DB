import React, { Component } from "react";
import "./error-indicator.css";
import errorIcon from "./error-icon.png";

class ErrorIndicator extends Component {
  render() {
    return (
      <div className="error-indicator">
        <img src={errorIcon} alt="error-img" />
        <h2>Oops...</h2>
        <h4>Something is wrong!</h4>
      </div>
    );
  }
}

export default ErrorIndicator;
