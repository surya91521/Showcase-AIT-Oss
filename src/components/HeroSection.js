import React from 'react';
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';
import Fade from 'react-reveal/Fade'
import ReactRoundedImage from "react-rounded-image";
import profile from '../xx.jpg';


function HeroSection() {
    return (
        <div className = 'hero-container' style ={{ 'background': 'url('+process.env.PUBLIC_URL + '/assets/images/night.jpg) center center/cover no-repeat'}} >
            
         {/* <video src='video-2.mp4' autoPlay loop muted /> */}
        <Fade top>
         < ReactRoundedImage 
            image ={profile}
          roundedColor="#FFFFFF"
          imageWidth="300"
          imageHeight="300"
          roundedSize="5"
           />
            <p>S Suryanarayanan</p>
            
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

        </div>
    )

   
}

  


export default HeroSection; 
