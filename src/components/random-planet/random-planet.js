import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,

    diameter: null,
    preloader: true,
    error: false,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id).then(p => {
      this.setState({
        id: id,
        name: p.name,
        population: p.population,
        rotationPeriod: p.rotation_period,
        diameter: p.diameter,
        preloader: false,
      });
    })
    .catch(() => this.setState({
      error: true
    }))
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;

    return (
      <div className="random-planet d-flex flex-wrap align-items-center">
        {this.state.error ? (
          <ErrorIndicator />
        ) : this.state.preloader ? (
          <Spinner />
        ) : (
          <>
            <div className="planet-image">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="planet"
              />
            </div>
            <div className="planet-details">
              <h1>{name}</h1>
              <ul>
                <li>
                  <hr />
                  <h6>Population: {population}</h6>
                  <hr />
                  <h6>Rotation Period: {rotationPeriod}</h6>
                  <hr />
                  <h6>Diameter: {diameter}</h6>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}
