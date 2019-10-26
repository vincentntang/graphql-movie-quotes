import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Components
import {Movie} from './components/Movie';
import {MovieCreate} from "./components/MovieCreate";
import {MovieList} from "./components/MovieList";

const App = () => {

  return (
    <Router>
      <div className="App">
        <div>
          <Link className="title" to={`/`}>Movie Quotes</Link>
        </div>
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
