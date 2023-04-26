import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Baloot from "../../assets/img/Baloot.svg";
import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-top fixed-top shadow-sm rounded">
                    <div class="container-fluid justify-content-between">

                        <div>
                            <a class="navbar-brand" href="#">
                                <img src={Baloot} alt="" width="55" height="55"
                                    class="d-inline-block align-text" />
                                <a class="app-name-navbar align-middle">Baloot</a>
                            </a>
                        </div>

                        <div class="input-group search-form">
                            <form action="" method="POST">
                                <div class="input-group mb-3">
                                    <select class="form-select search-option" id="inputGroupSelect01">
                                        <option selected class="search-option-item">name</option>
                                        <option value="1" class="search-option-item">category</option>
                                    </select>
                                    <input type="text" class="form-control-lg search-input" placeholder=" search your product ..."
                                        aria-label="Text input with dropdown button" />
                                </div>
                            </form>
                        </div>

                        <div class="d-flex">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="btn btn-primary btn-register-nv" href="register.html" role="button">Register</a>
                                </li>
                            </ul>


                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <a class="btn btn-primary btn-login-nv" href="login.html" role="button">Login</a>
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
