import React, {useState} from 'react'

export const MovieCreate = (props) =>{
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  return (
    <div className="movie-create">
      <form>
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
          onChange={(e) => setYear(e.target.value)}
        />
        <button className="btn-normal" type="submit">Submit</button>
      </form>
    </div>
  )
}
