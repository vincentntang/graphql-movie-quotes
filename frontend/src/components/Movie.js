import React from 'react'
import movieData from '../data/movies.json';
import quotesData from '../data/quotes.json';

export const Movie = (props) =>{
  const {movieId} = props.match.params; //windows
  const filteredMovie = movieData.find(x=> x.movie_id === movieId)
  const quotes = quotesData.filter(y => y.movie_id === movieId)
  return (
    <div className="movie-item single-movie">
      <img src={filteredMovie.poster} />
      <section>
        <h3>{filteredMovie.title}</h3>
        <p>{filteredMovie.year}</p>
        <ul>
          {quotes.map(quote => {
            if (quote.movie_id === filteredMovie.movie_id) {
              return (
                <li key={quote.movie_id}>
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