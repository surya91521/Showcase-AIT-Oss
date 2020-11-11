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
            <Carousel infiniteLoop useKeyboardArrows autoPlay interval="3000" showIndicators='False' >
                <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/aak.jpg?alt=media&token=8a5630e7-1d4b-4905-8c92-22d4ffcc5c31"/>
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/dist.jpg?alt=media&token=a0eaa6b8-6bc3-4d8b-9e5e-16756ab5d15a"/>
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/ele.jpg?alt=media&token=3d1b6871-287f-456a-a626-ffb733e45958" />
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/pent.jpg?alt=media&token=306d6ca5-24a2-4191-8d45-ee686047bb67" />
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agbi-b07a4.appspot.com/o/zest.jpg?alt=media&token=867d125f-0264-4c84-8b0e-8dda725ab292" />
                </div>
               
            </Carousel>
        </div>
        </div>
        </div>
        </Fade>
    )
}

export default Awards
