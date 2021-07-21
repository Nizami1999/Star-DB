import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./item-details.css";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    // Person
    id: null,
    name: null,
    birth_year: null,
    gender: null,
    skin_color: null,
    mass: null,
    loading: true,

    // Planet
    diameter: null,
    climate: null,
    rotation_period: null,
  };

  debugger;

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.updateItem();
      this.setState({
        loading: false,
      });
    }
  }

  updateItem() {
    const { selectedItem, getData } = this.props;
    if (!selectedItem) {
      return;
    }
    getData(this.props.selectedItem).then((p) => {
      this.setState({
        id: p.url.split("/")[5],
        name: p.name,
        birth_year: p.birth_year,
        gender: p.gender,
        skin_color: p.skin_color,
        mass: p.mass,
        diameter: p.diameter,
        rotation_period: p.rotation_period,
        climate: p.climate,
      });
    });
  }

  render() {
    const {
      id,
      name,
      birth_year,
      gender,
      skin_color,
      mass,
      diameter,
      climate,
      rotation_period,
    } = this.state;

    const { getImageUrl, liData } = this.props;
    const peopleData = (
      <>
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
      </>
    );

    const planetData = (
      <>
        <li>
          <hr />
          Diameter: {diameter}
        </li>
        <li>
          <hr />
          Climate: {climate}
        </li>
        <li>
          <hr />
          Rotation period: {rotation_period}
        </li>
      </>
    );

    if (!id) {
      return <h3>Please, select a person from list...</h3>;
    }

    return (
      <div className="item-details">
        <div className="row">
          <div className="col-md-4">
            <div className="item-image">
              <img src={getImageUrl} alt="per-img" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="details">
              <h2>{name}</h2>
              <ul>
                {liData === "people" && peopleData}
                {liData === "planet" && planetData}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
