import React, {useRef, useEffect} from "react";
import Foto from "../../image/myfoto.JPG";

import {TweenMax, Power3} from 'gsap';

import "./About.scss";

function About() {

  const handledownloadCV = () => {
    window.open("https://drive.google.com/file/d/1xDMSW1XOSY-3X_Q1QTbAmpqgKMkXTkIE/view?usp=sharing");
  }

  let textBox = useRef(null);

  useEffect(() => {

      TweenMax.to(textBox, 3, { opacity: 1, x: -30, ease:Power3.easeOut, delay: 0.6});

  }, []);


  return (
    <div className="app__about" id="about">
      <div className="app__about--image">
        <img src={Foto} alt="Foto" />
      </div>
      <div className="app__about--info" ref={el  => {textBox = el}}>
        <div className="app__about--info--title">
          <h2>About Me</h2>
        </div>
        <h3>Hi, my name is Serhii. <span>I am a Front-End Developer. </span></h3>
        <h4>In March 2020 I decided to being frontend developer. Everyday I hard working to being closer to accomplish this goal.</h4> <br/>
        <h4>I choosed this path of career because of my passions and interests. 
            Creative creating new things and looking how they develop from nothing to something big 
            gives me a lot of satisfaction and energy to carry on.</h4><br/>
        <h4>Curiosity how made changes and improvement will affect on final form of my work are something what always accompanies me during creating and development. 
            Also this curiosity together with self-satisfaction are something what the most exiciting me in whole creating process.</h4>
        <div className="personal">
          <div>Name
              <p>Serhii Hrebeniuk</p>
          </div>
          <div>E-mail
              <p>Serhiihrebeniuk01@gmail.com</p>
          </div>
          <div>Phone
              <p>+48733611403</p>
          </div>
          <div>Adress
              <p>Cracow, Poland</p>
          </div>
        </div>
        <button className="CVbtn" onClick={handledownloadCV}>Download CV<i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default About;
