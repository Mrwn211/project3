import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import KidCard from "../KidCard.js";
import AddKid from "../AddKid.js";
import NavBar from "../NavBar.js";
import KidService from "../kid-service.js";

class PageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listKids: []
    };
    this.service = new KidService();
  }

  toggleModal = event => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  componentDidMount() {
    this.service.getAllKids().then(response => {
      this.setState({ listKids: response.data });
    });
  }

  render() {
    return (
      <div>
        <div className="kidcards">
          {this.state.listKids.map(kid => {
            return (
              <KidCard
                image={kid.image}
                firstname={kid.firstName}
                lastname={kid.lastName}
                age={kid.age}
              />
            );
          })}
        </div>

        <div className={"button button-cta"}>
          <div onClick={this.toggleModal}>
            <FontAwesomeIcon icon="plus-circle" /> Add a kid
          </div>
        </div>
        <AddKid
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />

        <NavBar />
      </div>
    );
  }
}

export default PageAdmin;
