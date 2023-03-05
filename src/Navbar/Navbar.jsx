import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
//import logo from '../../Assets/logo.svg';

import MenuButton from "../Components/MenuButton/MenuButton";

function Navbar() {

  const [navOpen, setNavOpen] = useState(false);

  const activateLink = (item) => {
    setNavOpen(!navOpen) 
    if(item.title === "Home")
    {
      item.itemID = "activeItem"
    }
    else if(item.title === "Food")
    {
      item.itemID = "activeItem"
    }
    else if(item.title === "About-me")
    {
      item.itemID = "activeItem"
    }
  }
  // const navSlide = () => {
  //   const burger = document.querySelector('MenuButton');
  //   const nav = document.querySelector('.nav-items');
  //   const navLinks = document.querySelectorAll('#navA');
    
    
  //   burger.addEventListener('click', () => {
        
  //       //toggle nav
  //       nav.classList.toggle('nav-active');

  //       //animate links
  //       navLinks.forEach((link, index) => {
  //           if(link.style.animation) {
  //               link.style.animation = '';
            
  //           }else{
  //               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  //           }
  //       });

  //   });

  // }

  return (
    <>
    <nav className="navibar">
      <div className="navibar-links">
        <Link to='/' className="navibar-links_logo">
            Gourmet Hunter's
        </Link>
        
        <ul className={navOpen ? "nav-items active" : "nav-items"}>
          <div className="nav-options">
          {navItems.map(item => {
            return(
              <li key={item.id} className={item.cName} id={item.itemId} onClick={() => activateLink(item)} >
                <Link id="navA" to={item.path}>{item.title}</Link>
              </li>
            );
          })} 
          </div>   
        </ul>
          <div className="SMenuBtn" style={{zIndex:1001}} onClick={() => setNavOpen(!navOpen)}>
            <MenuButton />
          </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;