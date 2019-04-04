import React from "react";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

export default class Eventcalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myEvents: []
    };

    mobiscroll.util.getJson(
      "https://trial.mobiscroll.com/events/", // Rendre les events de la journée en JSON
      events => {
        this.setState({ myEvents: events });
      },
      "jsonp"
    );
  }
  render() {
    return (
      <mobiscroll.Eventcalendar
        lang="fr"
        theme="ios"
        display="inline"
        data={this.state.myEvents}
        view={{
          calendar: { type: "week" },
          eventList: { type: "day" }
        }}
      />
    );
  }
}
