import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from 'react-reveal/Fade'

function componentDidMount() 
{
  window.scrollTo(0, 0);
};

function Awards() {
  componentDidMount();
    return (
        <Fade Top>
        <div   style={{
            '--color-1': '#243B55',
          '--color-2': '#141E30',
            background: `
              linear-gradient(
                170deg,
                var(--color-1),
                var(--color-2) 80%
              )
            `,
        
        
            color: 'white',
            textAlign: 'center',
            paddingBottom: 20,
            height:"120vh"
          }}>
            <h1 style={{fontFamily:"serif",marginBottom:"50px"}}>Achievements</h1>
            <div className="container">
            <div class="carousel-wrapper" style={{maxWidth:"1120px"}}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay interval="3000" showIndicators='False'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/dist.jpg'} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/aak.jpg'} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/ele.jpg'} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/pent.jpg'} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/zest.jpg'} />
                </div>
               
            </Carousel>
        </div>
        </div>
        </div>
        </Fade>
    )
}

export default Awards
