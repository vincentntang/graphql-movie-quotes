import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
// Components
import {Movie} from './components/Movie';
import {MovieCreate} from "./components/MovieCreate";
import {MovieList} from "./components/MovieList";
import {Navbar} from './components/Navbar';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={MovieList}/>
          <Route exact path="/movie/create" component={MovieCreate}/>
          <Route path="/movie/:movieId" component={Movie}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
