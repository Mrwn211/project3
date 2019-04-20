import React, { Component } from "react";
import { Link } from "react-router-dom";

class KidCard extends Component {
  render() {
    return (
      <div className="cardout">
        <div className="card large">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img src={this.props.image} alt={this.props.firstname} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4 no-padding">
                  {`${this.props.firstname} ${this.props.lastname}`}
                </p>
                <p>
                  <span className="title is-6">{this.props.age}</span>
                </p>
                <Link
                  className="button is-info is-rounded"
                  to={`/fill-day/${this.props.kid_id}`}
                >
                  Fill the day
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KidCard;
