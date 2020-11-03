import React from 'react';
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src = "video-1.mp4" autoPlay loop muted />
            <h1>S Suryanarayanan</h1>
            <p>Lets make this  a Success!</p>
            <div className="hero-btns">
              <Button className ="btns"  buttonStyle='btn--outline'
              buttonSize='btn--large'>
               My Resume <i className ='far fa-play-circle'/>   
              </Button>

            </div>

        </div>
    )
}

export default HeroSection; 
