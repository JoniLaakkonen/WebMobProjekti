import React from 'react'
import "./Recipe.css"
import Navbar from '../../Navbar/Navbar';

function Cake() {
  return (
    <>
      <main className='recipe_main'>
        <Navbar/>
          <h1 id='recipe_Header'>Berrycake</h1>
          <div className='recipe_details'>
            <img id='foodimage' alt="picture of delicious looking cake" src="https://kareliauas-my.sharepoint.com/:i:/g/personal/2006259_edu_karelia_fi/EatxI_rZThhBrYK10tydKPEBOPZxQsSpfGk0kW-ROR-ELA?e=N63fws"></img>
            <article id='incredients'>
              <h2>Ainesosat: <br/><br/></h2>
              <p>3 kananmunaa<br/>-1 ¼ dl Dansukker Siro erikoishienoa sokeria<br/>-1 ¾ dl vehnäjauhoja<br/>-2 tl Dansukker Vaniljasokeria<br/>- 1 tl leivinjauhetta<br/><br/>Kostutus<br/>-noin 1 dl sitruunalimonadia (tai ½ dl sitruunalikööriä + ½ dl vettä)<br/><br/>Täyte ja kuorrutus<br/>-2 dl kuohukermaa<br/>-250 g mascarpone-juustoa tai maustamatonta tuorejuustoa<br/>-½-1 dl Dansukker Siro erikoishienoa sokeria<br/>-½ dl sitruunalikööriä (esim. Limoncello)<br/><br/>Täytteeksi ja pinnalle<br/>-noin 1 l marjoja (mansikka, vadelma, mustikka)<br/><br/>Viimeistelyyn<br/>-Dansukker Tomusokeria<br/>-syötäviä kukkia</p>
            </article>
          </div>
          <div className='recipe_guide_bg'>
            <article className='howToMake'>
              <h3>Valmistus: <br/><br/></h3>
              <p>-Voitele ja leivitä tasapohjainen, ø 17-19 cm:n kakkuvuoka. Käytä leivittämiseen kookoshiutaleita, korppujauhoja, mantelijauhetta tai pähkinärouhetta. Kuumenna uuni 200 asteeseen.<br/>-Vatkaa huoneenlämpöiset kananmunat ja sokeri kuohkeaksi vaahdoksi.<br/>-Sekoita jauhot, vaniljasokeri ja leivinjauhe ja lisää seos kananmuna-sokerivaahtoon kevyesti sekoittaen. Kaada taikina vuokaan.<br/>-Paista uunissa noin 25 minuuttia. Kokeile kakkupohjan kypsyys kakun keskeltä cocktailtikulla. Jäähdytä 5 minuuttia ja kumoa kakkupohja leivinpaperin päälle työpöydälle.<br/>-Vaahdota kerma, mascarpone ja sokeri. Mausta vaahto sitruunaliköörillä.<br/>-Leikkaa jäähtynyt kakkupohja kolmeksi levyksi. Siirrä pohjalevy kakkuvadille ja kostuta levyt sitä mukaa kuin täytät kakkua.<br/>-Levitä kakkulevylle kolmasosa mascarponevaahdosta ja ripottele täytteen päälle runsaasti marjoja, tee loput kerrokset samoin.<br/>-Peitä pinta runsaalla marjakeolla.<br/>-Anna kakun makujen tasoittua jääkaapissa noin 30 minuuttia ennen tarjoamista. Siivilöi pinnalle tomusokeria ja koristele kakku syötävillä kukilla.<br/><br/></p>
              <h4>Vinkkejä:<br/><br/></h4>
              <p><br/><br/></p>
            </article>
          </div>
      </main>
    </>
  );
}

export default Cake