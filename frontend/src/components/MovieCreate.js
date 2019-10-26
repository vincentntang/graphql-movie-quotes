import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import Swal from 'sweetalert2'

const ADD_MOVIE = gql`
  mutation CreateMovie($input: MovieInput!) {
    createMovie(input: $input) {
      movie_id
      title
      year
      plot
    }
  }
`;

export const MovieCreate = () =>{
  // Mutation
  const [addMovie] = useMutation(ADD_MOVIE, {
    onCompleted(data){
      Swal.fire({
        type: 'success',
        html: `
         <h2>ID: ${data.createMovie.movie_id}</h2>
         <p>Title: ${data.createMovie.title}</p>
         <p>Year: ${data.createMovie.year}</p>
         <p>Plot: ${data.createMovie.plot}</p>`
      })
    }
  });

  // Form Logic
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [plot, setPlot] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    addMovie({variables: {
      input: {
        title: title,
        year: year,
        plot: plot,
      }
    }});
  }

  return (
    <div className="movie-create">
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Year</label>
        <input
          type="text"
          onChange={(e) => setYear(e.target.value)} 
        />
        <label>Plot</label>
        <textarea 
          type="text" 
          onChange={(e) => setPlot(e.target.value)}
        />
        <button className="btn-normal" type="submit">Submit</button>
      </form>
    </div>
  )
}