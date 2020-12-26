import React from 'react';
import CountUp from "react-countup";

import Check from "../../image/check-mark.svg";
import Cup from "../../image/coffee-cup.svg";
import Time from "../../image/clock.svg";
import Case from "../../image/office-briefcase.svg";

import "./Calculator.scss";

function Calculator() {
    return (
        <div className="caluculator__container">
            <div className="infoBox">
                <div className="projectsDone">
                    <img src={Check} alt="Check" />
                    <CountUp 
                        className="numberUp"
                        end={3}
                        duration={8}
                    />
                    <h6>Projects Done</h6>
                </div>
                <div className="coffe">
                    <img src={Cup} alt="Cup" />
                    <CountUp 
                        className="numberUp"
                        end={145}
                        duration={3}
                    />
                    <h6>Cup of Coffe</h6>
                </div>
                <div className="hoursWork">
                    <img src={Time} alt="Time" />
                    <CountUp 
                        className="numberUp"
                        end={347}
                        duration={3}
                    />
                    <h6>Hours of Work</h6>
                </div>
                <div className="projectsInProgres">
                    <img src={Case} alt="Case" />
                    <CountUp 
                        className="numberUp"
                        end={5}
                        duration={4}
                    />
                    <h6>Projects In Progres</h6>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
