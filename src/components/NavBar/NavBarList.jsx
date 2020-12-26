import React from 'react';
import {Link} from "react-scroll";

import "./NavBarList.scss";
import BurgerNavbar from "./BurgerNavbar.jsx";

function NavBarList() {

    function handleClick(e) {
        e.preventDefault();
      }
  
    return (
        <ul className="app__navbar--links active">
        <li>
          <Link 
          to="home" 
          className="links inactive"
          spy={true} 
          smooth={true}
          offset={0}
          duration={1000}
          onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link 
          to="about"
          className="links inactive"
          spy={true} 
          smooth={true}
          offset={4.5}
          duration={1000} 
          onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link 
          to="skills"
          className="links inactive"
          spy={true} 
          smooth={true}
          offset={-75}
          duration={1000} 
          onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li>
          <Link 
          to="portfolio"
          className="links inactive"
          spy={true} 
          smooth={true}
          offset={-75}
          duration={1000} 
          onClick={handleClick}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
          to="contact"
          className="links inactive"
          spy={true} 
          smooth={true}
          offset={-43}
          duration={1000} 
          onClick={handleClick}>
            Contact
          </Link>
        </li>
        <BurgerNavbar />
      </ul>
      
    )
}

export default NavBarList;
