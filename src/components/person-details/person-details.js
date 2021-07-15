import React, { Component } from "react";
import "./person-details.css";

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="person-details">
        <div className="row">
          <div className="col-md-4">
            <div className="person-image">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/91BLCCISDTL._AC_SY355_.jpg"
                alt="per-img"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="details">
              <h2>R2-D2</h2>
              <ul>
                <li>
                  <hr />
                  Gender: n/a
                </li>
                <li>
                  <hr />
                  Gender: n/a
                </li>
                <li>
                  <hr />
                  Gender: n/a
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
