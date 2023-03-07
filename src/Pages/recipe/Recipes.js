import React, { useEffect, useState } from 'react'
import "./Recipe.css"
import Navbar from '../../Navbar/Navbar';
import file from '../../Data/Recipes.json';

function GnocchiLihapullat() {
  const [data, setData] = useState([])
  const [obj, setObj] = useState({
        id: "",
        name: "",
        rating: "",
        image: "",
        alt: "",
        title: "",
        linkTo: "",
        incredients: "",
        howToMake: "",
        hints: ""
  })
  useEffect(() => {
    {file.map((item) => {
      if(item.linkTo === (window.location.pathname)){
        setObj({
          id: item.id,
          name: item.name,
          rating: item.rating,
          image: item.image,
          alt: item.alt,
          title: item.title,
          linkTo: item.linkTo,
          incredients: item.incredients,
          howToMake: item.howToMake,
          hints: item.hints
        })
      }
    })}
  }, [])

  return (
    <>
      <main className='recipe_main'>
        <Navbar/>
          <h1 id='recipe_Header'>{obj.name}</h1>
          <div className='recipe_details'>
            <img id='foodimage' alt={obj.alt} src={obj.image}></img>
            <article id='incredients'>
              <h2>Ainesosat: <br/><br/></h2>
              <p>{obj.incredients}</p>
            </article>
          </div>
          <div className='recipe_guide_bg'>
            <article className='howToMake'>
              <h3>Valmistus: <br/><br/></h3>
              <p>{obj.howToMake}<br/><br/></p>
              <h4>Vinkkejä:<br/><br/></h4>
              <p>{obj.hints}<br/><br/></p>
            </article>
          </div>
      </main>
    </>
  );
}

export default GnocchiLihapullat