import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import Home from './components/Home';
import RestoList from './components/RestoList';
import RestoDetails from './components/RestoDetails';
import RestoCreate from './components/RestoCreate';
import RestoSearch from './components/RestoSearch';
import RestoUpdate from './components/RestoUpdate';
import Login from './components/Login'

import Logout from './components/Logout'

function App() {
  return (
    <div className="App">
      <Router>
       
        <Route path="/list">
          <RestoList />
        </Route>

        <Route path="/create">
          <RestoCreate />
        </Route>

        <Route path="/search">
          <RestoSearch />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/update/:id"
        render = {props=>(
          <RestoUpdate {...props} />
        )}
        >
        </Route>

        <Route path="/login"
        render = {props=>(
          <Login {...props} />
        )}
        >
        </Route>

        <Route path="/details">
          <RestoDetails />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
