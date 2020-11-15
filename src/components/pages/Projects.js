import React from 'react'
import './Projects.css'
import Fade from 'react-reveal/Fade'

function componentDidMount() 
{
  window.scrollTo(0, 0);
};

function project() {
  componentDidMount();
    return (
       
        <div className="projectTop" style={{
          '--color-1': '#243B55',
          '--color-2': '#141E30',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 80%
            )
          `}}>
        <Fade Top>
        <h1 style={{fontFamily:"serif" ,color:"#fff"}}>Projects Section</h1>  
        </Fade>
        <div class="card-columns container">
   
        <div className="innermost">  
        <div className=" card" style={{background:"LightCyan",marginTop:"5px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/inn.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Innerve App</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An andoid app which was made for the registrations, payment ,and providing info about our biggest annual college hackathon in Pune<strong>(INNERVE)</strong>.</p>
      <span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Android</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Java</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Firebase</span><br/><br/>
      <a class="btn btn-primary" href="https://github.com/surya91521/InNerveApp">View on Github</a>
    </div>
    </div>
        <div className=" card" style={{background:"LightCyan"}}>
    <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/gith.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Git Repo Parser</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An android app which by using github api, shows all the github repos matching to your search criteria.</p>
      <span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Java</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Android</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Github API</span><br /><br />     
      <a class="btn btn-primary" href="https://github.com/surya91521/GithubRepo">View on Github</a> 
    </div>
  </div>
         <div className=" card text-center" style={{background:"LightCyan",marginTop:"5px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/projects.jpg'} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>My PortFolio</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>It is the current portfolio which you are going through.Sorce code is uploaded in github.</p>
      <span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>React</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Boostrap</span><br /><br />
      <a class="btn btn-primary" href="https://github.com/surya91521/Showcase-AIT-Oss">View on Github</a>
   </div>
  </div>
         <div className=" card text-center"style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blen.jpg'} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Blend</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An android app which has all the links for everyone's basic needs and many more things for passing time.</p>
      <span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Java</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Android</span><br /><br />     
      <a class="btn btn-primary" href="https://github.com/surya91521/Blend">View on Github</a>
    </div>
  </div>
         <div className="card" style={{background:"LightCyan",marginTop:"5px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/med.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Medicare App</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An android app in which patients can detect skin cancer and its type ,consult nearby doctors based on the doctor's speciality and doctors can discuss about their studies in chat forum.</p>
      <span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Java</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Python</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>ML</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>AWS</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Firebase</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Android</span><br/><br />
      <a class="btn btn-primary" href="https://github.com/surya91521/AGBI-Hackathon">View on Github</a>
    </div>
    </div>
         <div className="card text-center" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/fit.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Fitness Tracker</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This Project uses MERN stack to build an app which tracks exercises of users.</p>
      <span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Mongo-DB</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Express</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>React</span><span class="badge badge-pill text-primary border border-primary" style={{marginRight:"5px"}}>Node</span><br /><br />
      <a class="btn btn-primary" href="https://github.com/surya91521/mernStack-exercise-app">View on Github</a>
    </div>
  </div>
        
         </div>
         
         </div> 
         
         
</div>

    )
}

export default project;
