import React, {useState, useEffect} from 'react'

export const MovieCreate = (props) =>{
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const onSubmit = event => {
    alert(`${description} ${title} ${year}`);
    event.preventDefault();
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
        <label>Description</label>
        <textarea 
          type="text" 
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-normal" type="submit">Submit</button>
      </form>
    </div>
  )
}


// useEffect(() => {
//   console.log(description, title, year);
// });