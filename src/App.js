import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";

//Import components
import NavigationBar from "./NavigationBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import List from "./Components/List";
import Item from "./Components/Item";
import Landing from "./Components/Landing";
import Home from "./Components/Home";

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

          <Route path="/List">
            <List />
          </Route>

          <Route path="/Item">
            <Item />
          </Route>

          <Route path="/Friends">
            <Landing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
