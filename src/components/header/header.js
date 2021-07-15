import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex header align-items-center flex-wrap">
        <h2>Start DB</h2>
        <ul className="d-flex flex-wrap align-items-center">
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Starships</a>
          </li>
        </ul>
      </div>
    );
  }
}

