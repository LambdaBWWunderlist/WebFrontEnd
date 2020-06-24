import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";

//Import components
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      Wunderlist
      <div>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
