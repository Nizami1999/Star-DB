import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import PlanetPage from "../planet-page/planet-page";
import ItemList from "../item-list/item-list";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="container star-db">
        <Header />
        <RandomPlanet />
        <PeoplePage getData={this.swapiService.getAllPeople} />
        <br />
        <PlanetPage getData={this.swapiService.getAllPlanets} />
        <br />
        
      </div>
    );
  }
}
