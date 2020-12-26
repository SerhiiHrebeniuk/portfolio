import React from 'react';

import "./Projects.scss";

import Covid19 from "../../image/Covid19.png";
import BestShop from "../../image/bestshop.png";

function Projects() {


    const hundleCovidClickLive = () => {
        window.open("https://covid-19-tracker-6065f.web.app");
    }
    const hundleCovidClickCode = () => {
        window.open("https://github.com/SerhiiHrebeniuk/covid-19-tracker");
    }

    const hundleBestShopClickLive = () => {
        window.open("https://serhiihrebeniuk.github.io/best-shop/");
    }

    const hundleBestShopClickCode = () => {
        window.open("https://github.com/SerhiiHrebeniuk/best-shop");
    }


    return (
        <div className="projects__container" id="portfolio">
            <h1>Projects</h1>
            <div className="box">
                <div className="covid19">
                    <div className="text">
                        <p>A simple project within the React course, 
                            a web application that uses the basic concepts and principles of working with React.</p> <br/>
                        <p>Technologies used in the project: <span>React, React Hooks, Sass, Css, JavaScript, Material-UI, Firebase.</span></p>
                        <div className="btn">
                            <button className="left--btn" onClick={hundleCovidClickLive}>Live</button>
                            <button className="right--btn" onClick={hundleCovidClickCode}>Code</button>
                        </div>
                    </div>
                    <img src={Covid19} alt="covid19" />
                </div>
                <div className="bestshop">
                    <img src={BestShop} alt="bestshop" />
                    <div className="text">
                        <p>Landing page, which is made in practice after learning the basics of HTML5, CSS3, JavaScript</p>
                        <div className="btn">
                            <button className="left--btn" onClick={hundleBestShopClickLive}>Live</button>
                            <button className="right--btn" onClick={hundleBestShopClickCode}>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
