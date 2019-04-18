import axios from "axios";

import React, { Component } from "react";

const errorHandler = err => {
  console.error(err);
  throw err;
};

class KidService extends Component {
  constructor(props) {
    super(props);
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_APIURL || ""}/admin`,
      withCredentials: true
    });
    this.service = service;
  }

  handleUpload = (formdata, kid_id) => {
    return this.service
      .post(`/upload/${kid_id}`, formdata)
      .then(response => response.data._id)
      .catch(errorHandler);
  };

  addKid = (firstname, lastname, age) => {
    try {
      return this.service
        .post("/addkid", {
          firstname,
          lastname,
          age
        })
        .then(response => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  getAllKids() {
    return this.service.get("/kids");
  }
}

export default KidService;
