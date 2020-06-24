import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";

//Import components
import NavigationBar from "./NavigationBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import List from "./Components/List";

function App() {
  return (
    <div>
      <NavigationBar />
      <div>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/list">
            <List />
          </Route>

          <Route path="/item">
            <List />
          </Route>

          <Route path="/edit">
            <List />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
