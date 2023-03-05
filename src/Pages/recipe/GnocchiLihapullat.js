import React, { useEffect, useState } from 'react'
import "./Recipe.css"
import Navbar from '../../Navbar/Navbar';
import file from '../../Data/Recipes.json';

function GnocchiLihapullat() {
  return (
    <>
      <main className='recipe_main'>
        <Navbar/>
          <h1 id='recipe_Header'>Gnocchi lihapulla vuoka</h1>
          <div className='recipe_details'>
            <img id='foodimage' alt="picture of ground meat burrito" src="https://kareliauas-my.sharepoint.com/personal/2006259_edu_karelia_fi/Documents/WebMobProjekti/Osa1/kuvat/foodiesfeed.com_tacos-with-pulled-pork-fresh-vegetables-and-cream.jpg"></img>
            <article id='incredients'>
              <h2>Ainesosat: <br/><br/></h2>
              <p>-Tomaattimurska <br/>-Valkosipuli <br/>-Peruna gnoccheja <br/>-Lihapullia <br/>-Mini tomaatteja <br/>-Mozzarella juustoa</p>
            </article>
          </div>
          <div className='recipe_guide_bg'>
            <article className='howToMake'>
              <h3>Valmistus: <br/><br/></h3>
              <p>-Laita uuni lämpenemään 225 c.<br/>-Keitä gnocchi palleroita kiehuvassa vedessä, kunnes al dente.<br/>-Pilko sipuli, sekä puolita lihapullat ja tomaatit ja aseta ne vuokaan.<br/>-Kun gnocchi pallerot on al dente, aseta ne vuokaan muitten ainesten sekaan<br/>-lisää tomaattimurska ja sekoita.<br/>-Laita vuoka nyt uuniin n. 30 min. Kun ruoka ollut uunissa sen 30 min, lisää vielä <br/>-juusto päälle ja laita vielä uuniin, kunnes juusto sulaa kunnolla. Nauti.<br/><br/></p>
              <h4>Vinkkejä:<br/><br/></h4>
              <p>-Voit laittaa ainesten sekaan mustapapuja, luodaksesi täyttävämmän ruuan.<br/>-Lihapullat voi korvata paistetulla jauhelihalla tai vaikkapa jauhiksella ja maku on <br/>-varmasti silti erinomainen. Loppujaan vain mielikuvitus on rajana.<br/>-Juusto variaatioitakin löytyy monia, joten mozzarella juuston voi vaikka korvata<br/>-parmesaani juustollakin vaihtelun vuoksi<br/><br/></p>
            </article>
          </div>
      </main>
    </>
  );
}

export default GnocchiLihapullat