import React, { Component } from "react";
import ItemDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import "./people-page.css";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
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
        renderItem={({ name, gender, birth_year }) => (
          <span>{`${name} | (${gender} ${birth_year})`}</span>
        )}
      />
    );

    const personDetails = (
      <ItemDetails
        selectedItem={this.state.selectedItem}
        getData={this.swapiService.getPerson}
        getImageUrl={`https://starwars-visualguide.com/assets/img/characters/${this.state.selectedItem}.jpg`}
        liData={"people"}
      />
    );

    return (
      <div className="row">
        <div className="col-md-6">{itemList}</div>
        <div className="col-md-6">{personDetails}</div>
      </div>
    );
  }
}
