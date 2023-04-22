import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../../assets/styles/login-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../api/axios";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(
      "username and pass entered :",
      this.state.username,
      this.state.password
    );

    event.preventDefault();

    axios
      .post("/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("successfull");
        }
      })
      .catch((error) => {
        console.log("failed");
      });
  }

  componentDidMount() {
    document.title = "Login";
    document.body.classList.add("bg-light");
  }

  render() {
    return (
      <div className="bg-light">
        <Nav />
        <div className="page-body">
          <div className="form">
            <h2>Baloot Account Login</h2>
            <p className="welcome-msg">
              Welcome back! You can log In with your username here!
            </p>

            <form
              className="login-from"
              action=""
              method="POST"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  className="form-control form-field"
                  // value={this.state.username || ''}
                  onChange={this.handleUsernameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control form-field"
                  // value={this.state.password || ''}
                  onChange={this.handlePasswordChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-default login-btn">
                Log In
              </button>
            </form>

            <div className="reg-link">
              <a className="reg-msg" href="register.html">
                <b>Register now</b>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;