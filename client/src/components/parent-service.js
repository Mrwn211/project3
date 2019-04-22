import axios from "axios";

import React, { Component } from "react";

const errorHandler = err => {
  console.error(err);
  throw err;
};

class ParentService extends Component {
  constructor(props) {
    super(props);
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_APIURL || ""}/parent`,
      withCredentials: true
    });
    this.service = service;
  }
}

export default ParentService;
