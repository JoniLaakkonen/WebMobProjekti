import React from 'react'
import "./recipebox.css"

function recipebox({recipe}) {
  return (
    <a className='recipebox' href={recipe.linkTo}>
      <img src={recipe.image} alt={recipe.alt} />
      <h5>{recipe.name}</h5>
      <small>{recipe.rating}</small>
    </a>
  )
}

export default recipebox