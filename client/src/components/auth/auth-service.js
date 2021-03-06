// components/auth/auth-service.js

import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_APIURL || ""}/auth`,
      withCredentials: true
    });
    this.service = service;
  }

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then(response => response.data)
      .catch(console.error);
  };

  signup = (username, password) => {
    return this.service
      .post("/signup", {
        username,
        password
      })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => response.data);
  };

  upload = formdata => {
    return this.service
      .post("/upload", formdata)
      .then(response => response.data);
  };
}

export default AuthService;
