import React from "react";
import {BrowserRouter, Route} from "react-router-dom";


import './index.css';

import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MySkills from "./components/Myskills/Myskills.jsx";
import Quotes from "./components/Quotes/Quotes.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Calculator from "./components/Calculator/Calculator.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <BrowserRouter>
    <div className="app__wrapper">
        <Route exact path="/" component={NavBar} />
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={About} />
        <Quotes />
        <Route exact path="/" component={MySkills} />
        <Route exact path="/" component={Projects} />
        <Calculator />
        <Route exact path="/" component={Contact} />
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
