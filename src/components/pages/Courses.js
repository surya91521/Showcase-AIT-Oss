import React from 'react'
import './Courses.css';
import Fade from 'react-reveal/Fade'

function componentDidMount() 
{
  window.scrollTo(0, 0);
};


function Courses() {
   
    componentDidMount();
    return (
        <div className = 'topmost'  style={{
          '--color-1': '#243B55',
          '--color-2': '#141E30',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 80%
            )
          `}}
          >
          <Fade Top>
          <h1 style={{fontFamily:"serif",color:"white"}}>Courses Section</h1>
          </Fade>
          <div className= 'contain'>
           <Fade Top> 
          <div className='innerContain'>  
    
             <ul className='card-deck'>
             <div class="row justify-content-center">
                <div className="card col-md-4" style={{background:"LightCyan"}} >
    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/googl.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif",}}><strong>Bits and bytes of Computer Networking (Google)</strong></p>
      <a href="https://www.coursera.org/account/accomplishments/certificate/NJHLX2JM5LCT" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
                <div className="card col-md-4"  style={{background:"LightCyan"}}>
    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/illinois.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}><strong>Ordered Data Structures (Illinois University)</strong></p>
      <a href="https://www.coursera.org/account/accomplishments/certificate/MW3ZJYDP4QAP" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
                <div className="card col-md-4"  style={{background:"LightCyan"}}>

    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/vand.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}><strong>Java for Android (VanderBalt University)</strong></p>
      <a href="https://www.coursera.org/account/accomplishments/certificate/3SXUGCZC2JTJ" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
               </div>
             </ul>

              <ul className='card-deck'>
              <div class="row justify-content-center"> 
                <div className="card col-md-6"  style={{background:"LightCyan"}} >
    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/hjava.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}><strong>Java (Hackerrank)</strong></p>
      <a href="https://www.hackerrank.com/certificates/ab661b96c75f" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
                <div className="card col-md-6"  style={{background:"LightCyan"}}>
    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/hprob.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}><strong>Problem Solving (Hackerrank)</strong></p>
      <a href="https://www.hackerrank.com/certificates/a85f00e3d16b" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
               </div>
              </ul>
    
          </div>
          </Fade>
          </div>
        </div>
    )
}

export default Courses
