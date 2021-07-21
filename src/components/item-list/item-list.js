import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import "./item-list.css";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const people = itemList.map((item) => {
      const id = item.url.split("/")[5];

      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {this.props.renderItem(item)}
        </li>
      );
    });

    return (
      <div className="item-list">
        <ul className="list-group list-group-flush">{people}</ul>
      </div>
    );
  }
}
