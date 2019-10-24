import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = (props) =>{
  return (
    <div className="navbar">
      <Link className="title" to={`/`}>Movie Quotes</Link>
      <Link className="btn-add-new" to={`/movie/create`}>+ Add New Movie</Link>
    </div>
  )
}