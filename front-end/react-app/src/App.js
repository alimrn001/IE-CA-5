import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/login";
import Error from "./components/errors/error";
import Product from "./components/product/product";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import User from "./components/user/user";
import Home from "./components/home/home";
import Provider from "./components/provider/provider";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/commodities/:productId" component={Product} />

        <Route path="/user">
          <User />
        </Route>

        <Route path="/providers/:providerId">
          <Provider />
        </Route>

        <Route path="/notfound">
          <Error errorCode="404" />
        </Route>

        <Route path="/forbidden">
          <Error errorCode="403" />
        </Route>

        <Route path="/badrequest">
          <Error errorCode="400" />
        </Route>

        <Route path="/logout">
          <p>log out</p>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <Error errorCode="404" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
