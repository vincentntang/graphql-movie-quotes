import React, {useState, useEffect } from 'react';
import './App.css';
import movieData from './movies.json'

function App() {
  return (
    <div className="App">
      <h2>Movie Searcher</h2>
      <input className="movie-search"/>
      <section className="movie-list">
        {movieData.map(item => {
          return (
            <div className="movie">
              <div className="movie-title">{item.Title}</div>
              <div className="movie-year">{item.Year}</div>
              <div className="movie-genre">{item.Genre}</div>
              <img className="movie-img" src={item.Poster}/>
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
