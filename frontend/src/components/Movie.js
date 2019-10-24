import React from 'react'
import movieData from '../data/movies.json';
import quotesData from '../data/quotes.json';

export const Movie = (props) =>{
  const {movieId} = props.match.params; //windows
  const filteredMovie = movieData.find(x=> x.imdbID === movieId)
  const quotes = quotesData.filter(y => y.imdbID === movieId)
  return (
    <div className="movie-item">
      <img src={filteredMovie.Poster} />
      <section>
        <h3>{filteredMovie.Title}</h3>
        <p>{filteredMovie.Year}</p>
        <ul>
          {quotes.map(quote => {
            if (quote.imdbID === filteredMovie.imdbID) {
              return (
                <li key={quote.imdbID}>
                  {quote.description}
                </li>
              )
            }
          })}
        </ul>
        <p>{filteredMovie.Plot}</p>
      </section>
    </div>
  )
}