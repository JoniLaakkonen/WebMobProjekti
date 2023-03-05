import React from 'react'
import "./Recipe.css"
import Navbar from '../../Navbar/Navbar';
function Tacos() {
  return (
    <>
      <main className='recipe_main'>
        <Navbar/>
          <h1 id='recipe_Header'>Tacos</h1>
          <div className='recipe_details'>
            <img id='foodimage' alt="picture of ground meat burrito" src="https://kareliauas-my.sharepoint.com/personal/2006259_edu_karelia_fi/Documents/WebMobProjekti/Osa1/kuvat/foodiesfeed.com_tacos-with-pulled-pork-fresh-vegetables-and-cream.jpg"></img>
            <article id='incredients'>
              <h2>Ainesosat: <br/><br/></h2>
              <p>Jauheliha<br/>-Taco sauce<br/>-Salaatti<br/>-Creme Fraiche<br/>-Kurkku<br/>-Tomaatteja<br/>-Tomaattimurskaa<br/>-Tortilla lettuja<br/><br/>Vaihtelu virkistää:<br/>-Musta papuja<br/>-Soijarouhetta</p>
            </article>
          </div>
          <div className='recipe_guide_bg'>
            <article className='howToMake'>
              <h3>Valmistus: <br/><br/></h3>
              <p>-Kypsennä jauheliha kuumalla pannulla, kunnes se on ruskeaa. Lisää pannulle mausteita oman maun mukaan ja tomaattimurskaa.<br/>-Leikkaa kaikki vihannekset valmiiksi ja lisää niiden päälle suolaa.<br/>-Nyt kun kaikki ainekset ovat valmiina, lisää suosikki ruoka aineesi tortilla letulle ja nauti.<br/><br/></p>
              <h4>Vinkkejä:<br/><br/></h4>
              <p>-Lisää pavut ja soijarouhe pannulle maustetun jauhelihan ja tomaattimurskan joukkoon <br/>-(Soijarouhe kannattaa valmistaa 3 min kiehuvassa vedessä etukäteen).<br/><br/></p>
            </article>
          </div>
      </main>
    </>
  );
}

export default Tacos