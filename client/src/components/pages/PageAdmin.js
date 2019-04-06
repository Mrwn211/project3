import React, { Component } from "react";
import KidCard from "../KidCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormDay from "../FormDay.js";

class PageAdmin extends Component {
  state = {
    showModal: false
  };

  toggleModal = event => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  closeModal = event => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div>
        <KidCard />
        <KidCard />
        <KidCard />

        <div className={"button button-cta"}>
          <div onClick={this.toggleModal}>
            <FontAwesomeIcon icon="plus-circle" />
            Add a kid
          </div>
        </div>

        <FormDay showModal={this.state.showModal} onEvent={this.closeModal} />
      </div>
    );
  }
}

export default PageAdmin;
