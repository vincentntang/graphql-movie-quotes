import React from 'react'
import movieData from '../data/movies.json';
import quotesData from '../data/quotes.json';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIE = gql`
  query Movie($movie_id: ID){
    movie(movie_id: $movie_id) {
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

export const Movie = (props) =>{
  const {loading, error, data} = useQuery(GET_MOVIE, {
    variables: { 
      movie_id: props.match.params.movieId
    }
  });
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error ...</p>
  return (
    <div className="movie-item single-movie">
      <img src={data.movie.poster} />
      <section>
        <h3>{data.movie.title}</h3>
        <p>{data.movie.year}</p>
        <ul>
          {data.movie.quotes.map(quote => {
            return (
              <li key={quote.quote_id}>
                {quote.description}
              </li>
            )
          })}
        </ul>
        <p>PLOT: {data.movie.plot}</p>
      </section>
    </div>
  )
}