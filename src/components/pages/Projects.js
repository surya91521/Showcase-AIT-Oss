import React from 'react'
import { Fade } from 'reactstrap';
import './Projects.css'



function project() {
    return (
        <div className="projectTop" style={{'background': 'url('+process.env.PUBLIC_URL + '/assets/images/back.jpg) center center/cover no-repeat'}}>
       
        <h1 style={{fontFamily:"serif" ,color:"#fff"}}>Projects Section</h1>  
        <div class="card-columns">
        <div class="card" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/inn.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Innerve App</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    </div>
        <div class="card" style={{background:"LightCyan"}}>
    <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/gith.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Git Repo Parser</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
         <div class="card text-center" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/projects.jpg'} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Wed d project</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
         <div class="card text-center"style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/blen.jpg'} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Blend</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
         <div class="card" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/med.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Medicare App</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    </div>
         <div class="card text-center" style={{background:"LightCyan"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/projects.jpg'} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Card title</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>

         </div> 
         
</div>
    )
}

export default project;
