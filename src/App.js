import React, { useState, useEffect, useHistory } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';

//Import components
import Login from './Components/Login'
import Register from './Components/Register'
import List from './Components/List'
function App() {
  
  return (
    <div className="App">
      The list
      <List />
      <div>
        {/* <Switch>
          <Route path ="/Login">
            <Login />
          </Route>

          <Route path = "/Register">
            <Register />
          </Route>
        </Switch> */}
      </div>
    </div>
  );
}

export default App;
