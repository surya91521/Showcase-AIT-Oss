import React from 'react'
import './Projects.css'



function project() {
    return (
        <div className="projectTop" style={{'background': 'url('+process.env.PUBLIC_URL + '/assets/images/back.jpg) center center/cover no-repeat'}}>
       
        <h1 style={{fontFamily:"serif" ,color:"#fff"}}>Projects Section</h1>  
        <div class="card-columns container">
        <div className="innermost">  
        <div className="card1 card" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/inn.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Innerve App</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An andoid app which was made for the registrations, payment ,and providing info about our biggest annual college hackathon in Pune<strong>(INNERVE)</strong>.</p>
      <a class="btn btn-primary" href="https://github.com/surya91521/InNerveApp">View on Github</a>
    </div>
    </div>
        <div className="card1 card" style={{background:"LightCyan"}}>
    <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/gith.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Git Repo Parser</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An android app which by using github api, shows all the github repos matching to your search criteria.</p>
      <a class="btn btn-primary" href="https://github.com/surya91521/GithubRepo">View on Github</a> 
    </div>
  </div>
         <div className="card1 card text-center" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/projects.jpg'} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Wed d project</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This card has supporting text below as a natural lead-in to additional content.</p>
      <a class="btn btn-primary" href="https://github.com/surya91521/InNerveApp">View on Github</a>
   </div>
  </div>
         <div className="card1 card text-center"style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blen.jpg'} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Blend</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An android app which has all the links for everyone's basic needs and many more things for passing time.</p>
      <a class="btn btn-primary" href="https://github.com/surya91521/Blend">View on Github</a>
    </div>
  </div>
         <div className="card1 card" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/med.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Medicare App</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>An android app in which patients can detect skin cancer and its type ,consult nearby doctors based on the docto's speciality and doctors can discuss about their studies in chat forum.</p>
      <a class="btn btn-primary" href="https://github.com/surya91521/AGBI-Hackathon">View on Github</a>
    </div>
    </div>
         <div className="card1 card text-center" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/projects.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Fitness Tracker</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This Project uses MERN stack to build an app which tracks exercises of users.</p>
      <a class="btn btn-primary" href="https://github.com/surya91521/mernStack-exercise-app">View on Github</a>
    </div>
  </div>
         </div>
         </div> 
         
</div>
    )
}

export default project;
