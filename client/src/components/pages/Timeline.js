import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Timeline extends Component {
  render() {
    return (
      <div className="timeline is-centered">
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Check-in</span>
        </header>
        <div className="timeline-item is-primary">
          <div className="timeline-marker is-primary" />
          <div className="timeline-content">
            <p className="heading">January 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <div className="timeline-item is-warning">
          <div className="timeline-marker is-warning is-image is-32x32">
            <img src="http://bulma.io/images/placeholders/32x32.png" />
          </div>
          <div className="timeline-content">
            <p className="heading">February 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2017</span>
        </header>
        <div className="timeline-item is-danger">
          <div className="timeline-marker is-danger is-icon">
            <i className="fa fa-flag" />
          </div>
          <div className="timeline-content">
            <p className="heading">March 2017</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Check-Out</span>
        </header>
      </div>
    );
  }
}

export default Timeline;
