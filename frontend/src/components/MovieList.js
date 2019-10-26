import React from 'react'
import {Link} from "react-router-dom"
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  query {
    movies {
      movie_id
      title
      year
      plot
      poster
      quotes {
        quote_id
        description
      }
    }
  }
`;

export const MovieList = () => {
  const {loading, error, data} = useQuery(GET_MOVIES);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error ...</p>

  return (
    <div className="movie-wrapper">
      <Link className="btn-add-new" to={`/movie/create`}>+ Add New Movie</Link>
      <div className="movie-list">
        {data.movies.map(movie => {
          return (
            <div className="movie-item">
              <img src={movie.poster} />
              <section>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <ul>
                  {movie.quotes.map(quote => {
                    return (
                      <li key={quote.quote_id}>
                        {quote.description}
                      </li>
                    )
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
