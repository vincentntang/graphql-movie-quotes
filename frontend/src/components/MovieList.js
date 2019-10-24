import React from 'react'
import {Link} from "react-router-dom"
import movieData from '../data/movies.json'
import quotesData from '../data/quotes.json'

export const MovieList = (props) => {
  return (
    <div className="movie-list">
      {movieData.map(movie => {
        return (
          <div className="movie-item">
            <img src={movie.Poster} />
            <section>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <ul>
                {quotesData.map(quote => {
                  if (quote.imdbID === movie.imdbID) {
                    return (
                      <li key={quote.imdbID}>
                        {quote.description}
                      </li>
                    )
                  }
                })}
              </ul>
              <Link className="btn-show-movie" to={`/movie/${movie.imdbID}`}>Movie Details</Link>
            </section>
          </div>
        )
      })}
    </div>
  )
}
