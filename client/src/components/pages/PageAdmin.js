import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import KidCard from "../KidCard.js";
import AddKid from "../AddKid.js";
import NavBar from "../NavBar.js";

class PageAdmin extends Component {
  state = {
    showModal: false
  };

  toggleModal = event => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  // closeModal = event => {
  //   this.setState({
  //     showModal: false
  //   });
  //   console.log("J'imprime les states du parent ", this.state);
  // };

  render() {
    return (
      <div>
        <KidCard />
        <KidCard />
        <KidCard />

        <div className={"button button-cta"}>
          <div onClick={this.toggleModal}>
            <Link />
            <FontAwesomeIcon icon="plus-circle" /> Add a kid
            {/* <Link to="/addkid">Add a kid</Link> */}
            <AddKid showModal={this.state.showModal} />
            <NavBar />
          </div>
        </div>
      </div>
    );
  }
}

export default PageAdmin;
