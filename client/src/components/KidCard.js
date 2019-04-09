import React, { Component } from "react";
import { Link } from "react-router-dom";

class KidCard extends Component {
  render() {
    return (
      <div className="row columns">
        <div className="column is-one-third">
          <div className="card large">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img
                      src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg"
                      alt="Kid's name"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4 no-padding">Okinami Akitaka</p>
                  <p>
                    <span className="title is-6">Age : 2 ans</span>
                  </p>
                  <Link className="button is-info is-rounded" to="/fill-day">
                    Fill the day
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KidCard;
