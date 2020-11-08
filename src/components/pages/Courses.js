import React from 'react'
import './Courses.css';
import Fade from 'react-reveal/Fade'

function Courses() {
   
    return (
        <div className = 'topmost' style={{'background': 'url('+process.env.PUBLIC_URL + '/assets/images/back.jpg) center center/cover no-repeat'}}>
          
          <h1 style={{fontFamily:"serif",color:"white"}}>Courses Section</h1>
          <div className= 'contain'>
           <Fade Top> 
          <div className='innerContain'>  
    
             <ul className='card-deck'>
             <div class="row justify-content-center">
                <div className="card col-md-4" style={{background:"LightCyan"}} >
    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/googl.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}>Bits and bytes of Computer Networking (Google)</p>
      <a href="https://www.coursera.org/account/accomplishments/certificate/NJHLX2JM5LCT" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
                <div className="card col-md-4"  style={{background:"LightCyan"}}>
    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/illinois.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}>Ordered Data Structures (Illinois University)</p>
      <a href="https://www.coursera.org/account/accomplishments/certificate/MW3ZJYDP4QAP" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
                <div className="card col-md-4"  style={{background:"LightCyan"}}>

    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/vand.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}>Java for Android (VanderBalt University)</p>
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
      <p class="card-text" style={{fontFamily:"serif"}}>Java (Hackerrank)</p>
      <a href="https://www.hackerrank.com/certificates/ab661b96c75f" class="btn btn-primary">View Certificate</a>
    </div>
  </div>
                <div className="card col-md-6"  style={{background:"LightCyan"}}>
    <img class="card-img-top" src= {process.env.PUBLIC_URL + '/assets/images/hprob.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <p class="card-text" style={{fontFamily:"serif"}}>Problem Solving (Hackerrank)</p>
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
