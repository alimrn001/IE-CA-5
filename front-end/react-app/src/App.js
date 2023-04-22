import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <p>log out</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
