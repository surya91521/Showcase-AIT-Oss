import React from 'react';
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';
import pdf from '../assets/intern.pdf';

function HeroSection() {
    return (
        <div className = 'hero-container' style ={{ 'background': 'url('+process.env.PUBLIC_URL + '/assets/images/img-home.jpg) center center/cover no-repeat'}} >
            <div className = 'info'>
         {/* <video src='video-2.mp4' autoPlay loop muted /> */}
            <h1>S Suryanarayanan</h1>
             <p>asajaskjAKSJAKJSAKJSLKAsjlaks
                 ASaKJNSJKANSAKNskaNSKANKSAKsAKSM
                 SASbajsnkANSKANSKAsnlAKNSLAKNslak</p>
                
            </div>   
            <p>Lets make this  a Success!</p>
            <div className="hero-btns">
            
              <a className ="btns" href={process.env.PUBLIC_URL+'/assets/intern.pdf'} download> 

              <Button className ="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                 My Resume     
                </Button>
                </a>   
              
             

            </div>

        </div>
    )
}

export default HeroSection; 
