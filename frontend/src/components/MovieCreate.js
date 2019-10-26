import React, {useState} from 'react'
import Swal from 'sweetalert2'

export const MovieCreate = () =>{
  const [plot, setPlot] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    Swal.fire({
      type: 'success',
      html: `
       <p>Title: ${title}</p>
       <p>Year: ${year}</p>
       <p>Plot: ${plot}</p>`
    })
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