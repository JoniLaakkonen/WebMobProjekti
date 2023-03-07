import React from 'react'
import { Link } from 'react-router-dom'
import "./recipebox.css"

function recipebox({recipe}) {
  return (
    <Link className='recipebox' to={recipe.linkTo}>
      <img src={recipe.image} alt={recipe.alt} />
      <h5>{recipe.name}</h5>
      <small>{recipe.rating}</small>
    </Link>
  )
}

export default recipebox