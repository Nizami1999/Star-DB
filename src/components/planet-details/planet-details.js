import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./planet-details.css";

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    birth_year: null,
    gender: null,
    skin_color: null,
    mass: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPerson !== prevProps.selectedPerson) {
      this.updatePerson();
      this.setState({
        loading: false,
      });
    }
  }

  updatePerson() {
    if (!this.props.selectedPerson) {
      return;
    }
    this.swapiService.getPerson(this.props.selectedPerson).then((p) => {
      this.setState({
        id: p.url.split("/")[5],
        name: p.name,
        birth_year: p.birth_year,
        gender: p.gender,
        skin_color: p.skin_color,
        mass: p.mass,
      });
    });
  }

  render() {
    const { id, name, birth_year, gender, skin_color, mass } = this.state;

    if (!id) {
      return <h3>Please, select a person from list...</h3>;
    }

    return (
      <div className="person-details">
        <div className="row">
          <div className="col-md-4">
            <div className="person-image">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt="per-img"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="details">
              <h2>{name}</h2>
              <ul>
                <li>
                  <hr />
                  Gender: {gender}
                </li>
                <li>
                  <hr />
                  Mass: {mass}
                </li>
                <li>
                  <hr />
                  Birthday: {birth_year}
                </li>
                <li>
                  <hr />
                  Skin color: {skin_color}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
