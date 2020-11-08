import React from 'react';
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade'
import ReactRoundedImage from "react-rounded-image";
import profile from '../xx.jpg';



function HeroSection() {
 
  
    return (
      


        <div className = 'hero-container' style ={{ 'background': 'url('+process.env.PUBLIC_URL + '/assets/images/night.jpg) center center/cover no-repeat'}}>
            
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
        <Typist className = "typis" style={{fontFamily:"serif"}} avgTypingDelay={30}>
        Hello Everyone I am currently pursuing a BE degree in Computer Engineering.
        I love to work with different tech stacks and playing with software technologies,
        I am a very cheerful person with the quality of adapting to my surroundings quickly.
        I have keen interest in android dev, Web dev and have good problem solving and analytical 
        skills.Apart from all this I have a keen interest in Anime(Hardcore Fan) and play basketball.
        </Typist> 
     
        </div>  
       
    
    )

   
}

  


export default HeroSection; 
