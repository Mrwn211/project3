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

  kidcreated = newkid => {
    this.setState({
      showModal: false,
      listKids: [...this.state.listKids, newkid]
    });
  };

  componentDidMount() {
    this.service.getAllKids().then(response => {
      this.setState({ listKids: response.data });
    });
  }

  render() {
    return (
      <div className="background">
        <div className="kidcards">
          {this.state.listKids.map(kid => {
            return (
              <KidCard
                image={kid.image}
                firstname={kid.firstname}
                lastname={kid.lastname}
                age={kid.age}
                kid_id={kid._id}
                history={this.props.history}
              />
            );
          })}
        </div>

        <AddKid
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          history={this.props.history}
          kidcreated={this.kidcreated}
        />

        <NavBar toggleModal={this.toggleModal} history={this.props.history} />
      </div>
    );
  }
}

export default PageAdmin;
