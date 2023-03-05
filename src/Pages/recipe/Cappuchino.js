import React from 'react'
import "./Recipe.css"
import Navbar from '../../Navbar/Navbar';

function Cappuchino() {
  return (
    <>
      <main className='recipe_main'>
        <Navbar/>
          <h1 id='recipe_Header'>Cappuchino</h1>
          <div className='recipe_details'>
            <img id='foodimage' alt="picture of cappuchino" src="https://kareliauas-my.sharepoint.com/personal/2006259_edu_karelia_fi/Documents/WebMobProjekti/Osa1/kuvat/foodiesfeed.com_coffee-with-milk-with-hearty-latte-art.jpg"></img>
            <article id='incredients'>
              <h2>Ainesosat: <br/><br/></h2>
              <p>-Maitoa<br/>-Espresso<br/>-Sokeri</p>
            </article>
          </div>
          <div className='recipe_guide_bg'>
            <article className='howToMake'>
              <h3>Valmistus: <br/><br/></h3>
              <p>-Lämmitä maito kattilassa noin 65 asteiseksi eli kunnes se höyryää.<br/>-Vispaa maito pehmeäksi vaahdoksi käyttäen pientä käsikäyttöistä vaahdotinta. <br/>-Vaihtoehtoisesti voit myös vispata maidon käsin.<br/>-Kaada espresso kuppiin ja lämmitetty maito ja vaahto päälle.<br/><br/></p>
              <h4>Vinkkejä:<br/><br/></h4>
              <p>-Mausta Cappuccino halutessasi ripauksella sokeria.<br/>-Lämmitä kuppi valmiiksi esim. kuumalla vedellä, että juoma pysyy pidempään lämpimänä<br/><br/></p>
            </article>
          </div>
      </main>
    </>
  );
}

export default Cappuchino