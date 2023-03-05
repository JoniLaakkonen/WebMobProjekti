import React from 'react'
import "./Home.css"
import Navbar from '../../Navbar/Navbar';
import MainBtn from '../../Components/MainButton/MainBtn';
import MainBtnDark from '../../Components/MainButtonDark/MainBtnDark'

function Home() {
  return (
      <div className='home_main'>
        <Navbar/>
        <div className='TextContent'>
          <h1 id='home_Header'>Welcome</h1>
          <article className='entryText'>
            <p className='entryquote'>When I was little, I couldn't eat much because of my numerous food allergies.
              In those days there weren't many special dietary options when most of the 
              allergies such as milk gluten or egg allergies were not recognised around the world. So every food was bland.
              Little by little after 2012, special diets started to be available 
              and foods became more and more 
              tastier. I had been eating tasteless food all my life at that time, so these 
              changed my world. <br/><br/>
            </p>
            <p className='entryquote'>
              But now I've already managed to grow what had been a problem in my stomach 
              bad bacteria in my stomach and I can eat almost anything. With this 
              I have developed a passion for food and it has grown and grown. 
              As a result, the food blog has been on my mind for a little while and now for this school. 
              project I was inspired to do, after a long time of thinking about the topic. The website 
              The main target group is people of all ages and genders who have a passion for food and a passion for food. 
              food or just looking for inspiration or a change in their everyday life. Go to 
              I'm putting together my experiences and recipes for different dishes that I make or get into 
              taste. <br/><br/>
            </p>
            <p className='entryquote'>
              I'm not a basic foodie, although I'd never leave anything uneaten, 
              that I can eat in the slightest. But this web page of mine is all about those gourmet foods that
              make our tastebuds go wild. Now iÍ tank you for your time to read my into and let you enjoy this page.
            </p>
          </article>
          <aside className='buttons'>
            <MainBtn id='btn_element' where="/WebMobProjekti/recipes" text="To Recipes"/>
            <MainBtnDark id='btn_element' where="/WebMobProjekti/about_me" at="contactme_form" text="Contact Me"/>
          </aside>
        </div>
      </div>
  )
}

export default Home