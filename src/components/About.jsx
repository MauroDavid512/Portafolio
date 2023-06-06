import React from "react";
import "./About.css"
import "./initanimation.css"
import aboutmebutton from "../imgs/aboutmebutton.png"
import dibumile from "../imgs/dibumile.png"
import fotomile from "../imgs/fotomile.png"


function About() {
    return (
        <div className="initanimation">
            <img src={aboutmebutton} alt="" />
            <br />
            <div className="aboutcontainer">
                <div className="photocontainer">
                    <img className="dibumile photo" src={fotomile} alt="" />
                    <img className="dibumile draw" src={dibumile} alt="" />
                </div>
                <div className="abouttext">My name is Mauro. I am Full Stack Developer with a background in Web Design. Experience working with NodeJS, React, Redux, SQL, and other technologies in the sector. <br /> I have a beautiful daughter. She design this portfolio actually. <br /> </div>
            </div>
        </div>
    );
}

export default About;