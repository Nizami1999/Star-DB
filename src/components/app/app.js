import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

export default class App extends Component {

  state = {
    selectedPerson: null
  }

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    return ( 
      <div className="container star-db">
        <Header />
        <RandomPlanet />
        <div className="row">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}/>
          </div>
          <div className="col-md-6"> 
            <PersonDetails selectedPerson={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}
