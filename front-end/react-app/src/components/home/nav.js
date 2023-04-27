import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Baloot from "../../assets/img/Baloot.svg";
import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-top fixed-top shadow-sm rounded">
            <div className="container-fluid justify-content-between">
              <div>
                <a className="navbar-brand" href="/">
                  <img
                    src={Baloot}
                    alt=""
                    width="55"
                    height="55"
                    className="d-inline-block align-text"
                  />
                  <a className="app-name-navbar align-middle">Baloot</a>
                </a>
              </div>

              <div className="input-group search-form">
                <form action="" method="POST">
                  <div className="input-group mb-3">
                    <select
                      className="form-select search-option"
                      id="inputGroupSelect01"
                    >
                      <option selected className="search-option-item">
                        name
                      </option>
                      <option value="1" className="search-option-item">
                        category
                      </option>
                    </select>
                    <input
                      type="text"
                      className="form-control-lg search-input"
                      placeholder=" search your product ..."
                      aria-label="Text input with dropdown button"
                    />
                  </div>
                </form>
              </div>

              <div className="d-flex">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="btn btn-primary btn-register-nv"
                      href="register.html"
                      role="button"
                    >
                      Register
                    </a>
                  </li>
                </ul>

                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a
                      className="btn btn-primary btn-login-nv"
                      href="login.html"
                      role="button"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
