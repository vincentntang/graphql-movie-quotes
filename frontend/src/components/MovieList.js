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
              <img src={movie.poster} />
              <section>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <ul>
                  {quotesData.map(quote => {
                    if (quote.movie_id === movie.movie_id) {
                      return (
                        <li key={quote.movie_id}>
                          {quote.description}
                        </li>
                      )
                    }
                  })}
                </ul>
                <Link className="btn-normal" to={`/movie/${movie.movie_id}`}>Movie Details</Link>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  )
}
