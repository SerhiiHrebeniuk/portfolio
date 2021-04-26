import React from 'react';

import './Myskills.scss';
import HTML5 from '../../image/html5.svg';
import CSS3 from '../../image/css-3.svg';
import Sass from '../../image/sass-1.svg';
import JavaScript from '../../image/javascript.svg';
import REACT from '../../image/react-2.svg';
import Git from '../../image/git-icon.svg';
import MUI from '../../image/material-ui-1.svg';
import GSAP from '../../image/gsap-greensock.svg';
import RWD from '../../image/RWD.png';
import BEM from '../../image/bem.svg';
import Trello from '../../image/trello.svg';
import NPM from '../../image/npm.svg';
import Gulp from '../../image/gulp.svg';
import Webpack from '../../image/webpack-icon.svg';
import Babel from '../../image/babel-10.svg';
import VSC from '../../image/visual-studio-code-1.svg';
import Github from '../../image/github-octocat.svg';
import Figma from '../../image/figma-1.svg';

function Myskills() {
    return (
        <div  className="app__myskills" id="skills">
                <div className="app__title">
                    <h1>Skills</h1>
                </div>
                <div className="app__box">
                    <h1>Here are the technologies I use.</h1>
                    <div className="app__box--skills">
                        <div className="app__box--skills--use">
                            <h2>My tech stack</h2>
                            <ul>
                                <li><img src={HTML5}  alt="html5"/>HTML5</li>
                                <li><img src={CSS3}  alt="html5"/>CSS3 (<img src={Sass}  alt="html5"/>Sass)</li>
                                <li><img src={JavaScript}  alt="html5"/>JavaScript (ES6 +)</li>
                                <li><img src={REACT}  alt="html5"/>React.js</li>
                                <li><img src={Git}  alt="html5"/>Git</li>
                                <li><img src={MUI}  alt="html5"/>Material UI</li>
                                <li><img src={GSAP}  alt="html5"/>GSAP</li>
                                <li><img src={RWD}  alt="html5"/>RWD</li>
                                <li><img src={BEM}  alt="html5"/>BEM</li>
                            </ul>
                        </div>
                        <div className="app__box--skills--learn">
                            <h2>Tools what I use</h2>
                            <ul>
                                <li><img src={Trello}  alt="html5"/>Trello</li>
                                <li><img src={NPM}  alt="html5"/>NPM</li>
                                <li><img src={Gulp}  alt="html5"/>Gulp</li>
                                <li><img src={Webpack}  alt="html5"/>Webpack</li>
                                <li><img src={Babel}  alt="html5"/>Babel</li>
                                <li><img src={VSC}  alt="html5"/>Visual Studio Code</li>
                                <li><img src={Github}  alt="html5"/>GitHub</li>
                                <li><img src={Figma}  alt="html5"/>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Myskills;

