import React, {Fragment}from 'react'
import {Link} from "react-router-dom"
import movieData from '../data/movies.json'
import quotesData from '../data/quotes.json'

export const MovieList = (props) => {
  return (
    <div className="movie-wrapper">
      <Link className="btn-add-new" to={`/movie/create`}>+ Add New Movie</Link>
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
                <Link className="btn-normal" to={`/movie/${movie.imdbID}`}>Movie Details</Link>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  )
}
