import React  from "react";
import {animateScroll as scroll} from "react-scroll";

import "./NavBar.scss";
import BurgerNavBar from "./BurgerNavbar.jsx";
import NavBarList from "./NavBarList.jsx";
import Logo from "../../image/Circle.png";

function NavBar() {

  let scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div className="app__navbar">
      <div className="app__navbar--logo" onClick={scrollToTop} >
        <img src={Logo} alt="Circle Logo"/>
        <h1>Serhii Hrebeniuk</h1>
      </div>
        <BurgerNavBar/>
        <NavBarList />
    </div>
  );
}

export default NavBar;
