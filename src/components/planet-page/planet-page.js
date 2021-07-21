import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details/item-details";
import "./planet-page.css";
import ItemList from "../item-list/item-list";

export default class PlanetPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const itemList = (
      <ItemList
        getData={this.props.getData}
        onItemSelected={this.onItemSelected}
        renderItem={({ name, climate }) => `${name} ➡️ ${climate}`}
      />
    );

    const planetDetails = (
      <ItemDetails
        selectedItem={this.state.selectedItem}
        getData={this.swapiService.getPlanet}
        getImageUrl={`https://starwars-visualguide.com/assets/img/planets/${this.state.selectedItem}.jpg`}
        liData={"planet"}
      />
    );

    return (
      <div className="row">
        <div className="col-md-6">{itemList}</div>
        <div className="col-md-6">{planetDetails}</div>
      </div>
    );
  }
}
