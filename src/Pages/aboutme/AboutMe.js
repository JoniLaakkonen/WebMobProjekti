import React, { useState } from 'react'
import "./AboutMe.css"
import Navbar from '../../Navbar/Navbar'
import minakuva from '../../Assets/Images/minakuva.JPG';

function AboutMe() {
  const {email, setEmail} = useState("-");
  const {title, setTitle} = useState("-");
  const {body, setBody} = useState("-");
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const smoothScroll = () => {
    const element = document.getElementById('contactme_form');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



  return (
    <>
      <div className='about_main'>
        <Navbar/>
        <h1 id='about_Header'>About Me</h1>
        <div className='about_details'>
          <article id='about_info'>
            <h4 id='about_name'> Joni Laakkonen</h4>
            <p id='personal_info'>	- 23 years old<br/>
	            - Passionate about coding and food
            </p>
            <small id='contact_info'>
              +358445991202 <br/>
	            jolaakkonen@gmail.com<br/>
	            Joensuu, FI
            </small>
          </article>
          <img id='minakuva' src={minakuva}></img>
        </div>
        <a onClick={smoothScroll}><h2 id='scroll_down'>To contact form</h2></a>
      </div>
      <div id='contactme_form'>
        <div className='contact_cntr'>
          <form onSubmit={handleSubmit}>
            <div className="field1">
              <label> Contact Me: </label>
              <input placeholder="Email"onChange={(event) => setEmail(event.target.value)}/>
              <input placeholder="Title"onChange={(event) => setTitle(event.target.value)}/>
              <textarea placeholder="Type here..."onChange={(event) => setBody(event.target.value)}/>
            </div>
            <button type="submit" id="submitBtn" className="submitBtn">{" "}Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AboutMe