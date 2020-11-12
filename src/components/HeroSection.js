import React from 'react';
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade'
import ReactRoundedImage from "react-rounded-image";
import profile from '../xx.jpg';
import Particles from 'react-particles-js';
import particlesConfig from './configParticles';



function HeroSection() {
 
  
    return (
     
       <div style ={{backgroundColor:'#22162B',paddingLeft:"5px",paddingRight:"5px"}}>
        <div className = 'hero-container' >
         <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
         {/* <video src='video-2.mp4' autoPlay loop muted /> */}
        
        <Fade top>
        
         < ReactRoundedImage 
            image ={profile}
          roundedColor="#FFFFFF"
          imageWidth="300"
          imageHeight="300"
          roundedSize="5"/>
        
            <p style={{fontFamily:"serif"}}>S Suryanarayanan</p>
            
            <div className="hero-btns">
              <a className ="btns" href={process.env.PUBLIC_URL+'/assets/intern.pdf'} download> 

              <Button className ="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                 My Resume     
                </Button>
                </a>   
            </div>
            </Fade >
        <Typist className = "typis" style={{fontFamily:"serif",}} avgTypingDelay={15}>
        Hello Everyone I am currently pursuing a BE degree in Computer Engineering.
        I am a tech savvy have a great zeal playing with software technologies.
        I am a very cheerful person with the quality of adapting to my surroundings quickly.
        I have keen interest in android dev, Web dev and have good problem solving and analytical 
        skills.Apart from all this I am passionate about playing basketball.
        </Typist> 
         
        </div>  
       </div>
      
    )

   
}

  


export default HeroSection; 
