import React, { Component } from "react";
import "./item-list.css";

export default class ItemList extends Component {
  render() {
    return (
      <div className="item-list">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Luke Sksacscywas 1903</li>
          <li class="list-group-item">Luke Skywas 1903</li>
          <li class="list-group-item">Luke Skywas 1903</li>
          <li class="list-group-item">Luke Skywas 1903</li>
          <li class="list-group-item">Luke Skywas 1903</li>
          <li class="list-group-item">Luke Skywas 1903</li>
        </ul>
      </div>
    );
  }
}
