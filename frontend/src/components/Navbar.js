import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = (props) =>{
  return (
    <div>
      <Link to={`/`}><h2>Movie Quotes</h2></Link>
      <button className="add-new">
        <Link to={`/movie/create`}>+ Add New Movie</Link>
      </button>
    </div>
  )
}