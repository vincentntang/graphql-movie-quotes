import React, {useState, useEffect } from 'react';
import './App.scss';
import movieData from './movies.json'
import quotesData from './quotes.json'

const App = () => {
  return (
    <div className="App">
      <h2>Movie Searcher</h2>
      <input className="movie-search"/>
      <div className="movie-list">
        {movieData.map(movie => {
          return (
            <div className="movie">
              <img src={movie.Poster}/>
              <section>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>                
                <ul>
                  {quotesData.map(quote => {
                    if(quote.imdbID === movie.imdbID){
                      return (
                        <li key={quote.imdbID}>
                          {quote.description}
                        </li>
                      )
                    }
                  })}
                </ul>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
