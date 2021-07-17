import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({
        peopleList,
      });
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const people = peopleList.map(({ url, name }) => {

      const id = url.split("/")[5];
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
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
