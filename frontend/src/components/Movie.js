import React from 'react'
import movieData from '../data/movies.json';
import quotesData from '../data/quotes.json';

export const Movie = (props) =>{
  const {movieId} = props.match.params; //windows
  const filteredMovie = movieData.find(x=> x.imdbId === movieId)
  const quotes = quotesData.filter(y => y.imdbId === movieId)
  return (
    <div className="movie-item single-movie">
      <img src={filteredMovie.poster} />
      <section>
        <h3>{filteredMovie.title}</h3>
        <p>{filteredMovie.year}</p>
        <ul>
          {quotes.map(quote => {
            if (quote.imdbId === filteredMovie.imdbId) {
              return (
                <li key={quote.imdbId}>
                  {quote.description}
                </li>
              )
            }
          })}
        </ul>
        <p>PLOT: {filteredMovie.plot}</p>
      </section>
    </div>
  )
}