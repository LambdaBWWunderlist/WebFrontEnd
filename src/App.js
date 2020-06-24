import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";

//Import components
import NavigationBar from "./NavigationBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import List from "./Components/List";
import Item from "./Components/Item";
import ItemForm from './Components/ItemForm'

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

          <Route path="/Home">
            <List />
          </Route>

          <Route path="/Item">
            <Item />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
