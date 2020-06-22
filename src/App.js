import React, { useState, useEffect, useHistory } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';

//Import components
import Login from './Components/Login'
import Register from './Components/Register'
function App() {

  
  return (
    <div className="App">
      The list
      <div>
        <Switch>
          <Route path ="/Login">
            <Login />
          </Route>

          <Route path = "/Register">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
