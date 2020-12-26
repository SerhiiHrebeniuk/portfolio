import React, {useRef, useEffect, useState} from 'react';
import './Header.scss';
import Background from '../../image/background.jpg';

import {TweenMax, Power3, Power4} from 'gsap';


function Header() {

    const [offsetY, setOffSetY] = useState(0);
    const handleScroll = () => setOffSetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    let textTitle = useRef(null);
    let textSubTitle = useRef(null);
    let textLine = useRef(null);
    let button = useRef(null);

    let infoBox = useRef(null);

    const clickInfo = () => {
        alert("Congratulations! You made a great choice. Thank you for your trust.");
    }

    useEffect(() => {

        TweenMax.to(textTitle, 4, {  opacity: 1, y: -20, ease: Power3.easeOut, delay: .6})
        TweenMax.to(textSubTitle, 4, {  opacity: 1, y: -20, ease: Power3.easeOut, delay: .8})
        TweenMax.to(textLine, 4, {  opacity: 1, y: -20, ease: Power3.easeOut, delay: .8})
        TweenMax.to(button, 2, {  opacity: 1, y: -10, ease: Power3.easeOut, delay: .8})

        TweenMax.to(infoBox, 3, { opacity: 1, y:0, x: 0, ease: Power4.easeOut, delay: .3})

    },[])

    return (
        <div className="app__header" id="home">
            <div className="app__header--box" ref={el => {infoBox = el}}>
                    <div className="app__header--text">
                        <h1 ref={el => {textTitle = el}}>Hi, I`m Serhii Hrebeniuk.</h1>
                            <br/> 
                        <h2 ref={el => {textSubTitle = el}}>I am <span>IT passionate</span>, I based in Krakow, Poland, 
                            where I finished programming course at the IT school <span>CodersLab</span> in the field of <span>Front-End Developer. </span>
                             I like to solve design problems, create a smart user interface and write clean code.
                            I am looking to find my <span>first job in Web Development</span> and improve my skills, knowledge and abilities.
                            </h2>
                    </div>
                    <hr ref={el => {textLine = el}}></hr>
                <button className="app__header--box--button" ref={el => {button = el}} onClick={clickInfo}>Hire Me</button>
            </div>
                <img  src={Background} className="bgImage" alt="Background" style={{ transform: `translateY(${offsetY * 0.5}px)` }}/>
        </div>
    )
}

export default Header;
