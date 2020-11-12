import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from 'react-reveal/Fade'
import "./Awards.css"

function componentDidMount() 
{
  window.scrollTo(0, 0);
};

function Awards() {
  componentDidMount();
    return (
        
        <div  className='outerEnd' style={{
            '--color-1': '#243B55',
          '--color-2': '#141E30',
            background: `
              linear-gradient(
                170deg,
                var(--color-1),
                var(--color-2) 80%
              )
            `,
            paddingBottom: 20, }}>
            <Fade Top>   
            <h1 style={{fontFamily:"serif",marginBottom:"50px",color:"white"}}>Achievements</h1>
            <div className="container">
            <div class="carousel-wrapper" style={{maxWidth:"1120px"}}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay interval="2500" showIndicators='False'>
                <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/aak.jpg?alt=media&token=99c75237-e3dc-4f14-b729-02a5c2889b72"/>
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/dist.jpg?alt=media&token=5e023863-5738-4e8e-bb57-b4c3f5d3e55a"/>
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/ele.jpg?alt=media&token=99299b18-901a-4d6e-8916-a510d4740ec1" />
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/pent.jpg?alt=media&token=a7313565-a702-45d2-b3ac-bcae1d2e0cb2" />
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/zest.jpg?alt=media&token=97485283-e884-4f97-afe8-12210903c903" />
                </div>
               
            </Carousel>
        </div>
        </div>
        </Fade>
        </div>
       
    )
}

export default Awards
