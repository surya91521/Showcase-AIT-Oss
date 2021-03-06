import React from 'react'
import './internship.css'



function componentDidMount() 
{
  window.scrollTo(0, 0);
};



function Internships() {

    componentDidMount();

   

    return (

      
        <div className="outerLast" style={{
          '--color-1': '#243B55',
          '--color-2': '#141E30',
          background: `
            linear-gradient(
              170deg,
              var(--color-1),
              var(--color-2) 80%
            )
          `,
          paddingBottom: 310}} >
           
            <h1 style={{marginBottom:"40px",color:"#FFF",fontFamily:'serif'}}>Work Experience</h1>  
      
            <div>
           <div class="card-columns container">
           <div class="modal" id="myModal1" style={{border:"3px solid #9984D4"}}>  
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
      
        <div class="modal-header" style={{fontFamily:'serif',backgroundColor:"LightCyan",border:"3px solid #9984D4"}}>
          <h4 class="modal-title"><strong>TutsWiki</strong></h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div class="modal-body" style={{fontFamily:'serif',backgroundColor:"LightCyan",border:"3px solid #9984D4"}}>
          Worked as a freelancer Content Writer. My main job was to write 100% unique and quality content with implementation codes  and without any plagiarism on topics based on java and its tools.
        </div>
        
    
        <div class="modal-footer" style={{fontFamily:'serif',color:"Dark gray",backgroundColor:"LightCyan",boxShadow:"0 4px 8px 0 #26408B, 0 6px 20px 0 #59656F",border:"3px solid #9984D4"}}>
          <strong>Sep-2020 to Oct-2020</strong>
        </div>
        
      </div>
    </div>
  </div>
           <div class="modal " id="myModal" style={{border:"3px solid #9984D4"}} >  
    <div class="modal-dialog modal-dialog-centered" >
      <div class="modal-content">
      
      
        <div class="modal-header" style={{backgroundColor:"LightCyan",border:"3px solid #9984D4"}}>
          <h4 class="modal-title" style={{fontFamily:"serif"}}><strong>Panoslice Intern</strong></h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div class="modal-body"  style={{fontFamily:"serif",backgroundColor:"LightCyan",border:"3px solid #9984D4"}}>
          Worked an an Android Developer Intern with the panoslice Android developer team. My works included updating the app's UI giving it a whole new look,google ads, debugging and content locking and unlocking based on ads.
        </div>
        
    
        <div class="modal-footer" style={{fontFamily:"serif",color:"Dark gray",backgroundColor:"LightCyan",border:"3px solid #9984D4"}}>
         <strong>June-2020 to July-2020</strong> 
        </div>
        
      </div>
    </div>
  </div>
                <div className="innermost">  
                <div className="card" style={{background:"LightCyan",marginTop:"5px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/pano.jpg'} alt="Card image cap" style={{padding:"20px"}}/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>PanoSlice App</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>Worked an an Android developer intern with panoslice app development team...</p>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Read More
  </button>
           
    </div>
    </div>
                 <div className="card" style={{background:"LightCyan",marginTop:"5px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/tut.jpg'} alt="Card image cap" style={{height:"355px"}}/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>TutsWiki</strong></h5>
      <p class="card-text" style={{fontFamily:"serif"}}>Worked as a freelancer content writer for TutsWiki...</p>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal1">
    Read More
  </button>
      
    </div>
    </div>
               
                </div>
              
           </div>
          
           </div>
       
        </div>
       
    )
}

export default Internships
