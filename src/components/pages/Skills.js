import React from 'react';
import './Skills.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJava,
  faCss3,
  faGithub,
  faAndroid,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade'

function componentDidMount() 
{
  window.scrollTo(0, 0);
};


const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

function Skills() {

    componentDidMount();
        return (
        <div className ="toppskills " style ={{ 'background': 'url('+process.env.PUBLIC_URL + '/assets/images/back.jpg) center center/cover no-repeat'}}>
          <Fade Top>
         <div className="topsskills container"> 
          <div className="heading" style={{marginBottom:"50px"}}>
          <h1 style={{fontFamily:"serif" ,justifyContent:"center",color:"#fff"}}>Skills section</h1> 
          </div>        
          <div className="row justify-content-center " style={{marginBottom:"50px"}} >

            <div className="col-md-6 justify-content-center"  style={{marginBottom:"40px"}}>
             <h3 style={{marginBottom:"30px" , fontFamily:"serif",color:"#fff"}}> Technical Skills</h3> 
              <font color="#fff"> C/C++</font><Progress done="85"/>
             <FontAwesomeIcon icon={faJava} size="1x" className="Ja"/> <font color="#fff"> Java</font> <Progress done="70"/>
             <FontAwesomeIcon icon={faAndroid} size="1x" className="An"/><font color="#fff"> Android</font><Progress done="80"/>
             <i className="fa fa-database fa-1x" > </i><font color="#fff"> SQL</font><Progress done="90"/>
             <i className="fa fa-leaf fa-1x"> </i><font color="#fff"> Mongo-DB</font><Progress done="50"/>
             <FontAwesomeIcon icon={faGithub} size="1x" className="gi"/> <font color="#fff"> GitHub</font><Progress done="70"/>
             <FontAwesomeIcon icon={faReact} size="1x" className="re"/><font color="#fff"> React</font><Progress done="40"/>
             <i className="fa fa-fire fa-1x"> </i>  <font color="#fff"> Firebase</font><Progress done="70"/>
             <FontAwesomeIcon icon={faHtml5} size="1x" className="ht"/> <font color="#fff"> HTML5</font><Progress done="40"/>
             <FontAwesomeIcon icon={faCss3} size="1x" className="cs"/> <font color="#fff"> CSS3</font><Progress done="40"/>
            </div> 
            <div className="col-md-6 justify-content-center">
             <h3 style={{marginBottom:"30px" , fontFamily:"serif",color:"#fff"}}> Soft Skills</h3> 
             <font color="#fff">TeamWork</font><Progress done="90"/>
             <font color="#fff">Time Managaement</font><Progress done="80"/>
             <font color="#fff">Creative Thinker</font><Progress done="65"/>
             <font color="#fff">Problem Solving</font><Progress done="80"/>
             <font color="#fff"> Adaptability</font><Progress done="90"/>
            </div>   
            </div>
            <h2 style={{fontFamily:"serif",color:"#FFF"}}>Coding Skills</h2>
          <ul className='card-deck'>
             <div class="row justify-content-center">
                <div className="card1 card" style={{background:"LightCyan",width:"250px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/leet.jpg'} alt="Card image cap" style={{height:"200px"}}/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Leetcode</strong></h5>
      <a class="btn btn-primary" href="https://leetcode.com/surya91521/">View Profile</a>
    </div>
    </div>
                <div className="card1 card" style={{background:"LightCyan",width:"250px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/hack.jpg'} alt="Card image cap" style={{height:"200px"}}/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>HackerRank</strong></h5>
      <a class="btn btn-primary" href="https://www.hackerrank.com/surya91521">View Profile</a>
    </div>
    </div>
                 <div className="card1 card" style={{background:"LightCyan",width:"250px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/gfg.jpg'} alt="Card image cap" style={{height:"200px"}}/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>GeeksforGeeks</strong></h5>
      <a class="btn btn-primary" href="https://auth.geeksforgeeks.org/user/user_6dgd/practice/">View Profile</a>
    </div>
    </div>
                <div className="card1 card" style={{background:"LightCyan",width:"250px"}}>
  <img class="card-img-top" src={process.env.PUBLIC_URL + '/assets/images/int.jpg'} alt="Card image cap" style={{height:"200px"}}/>
    <div class="card-body text-center">
      <h5 class="card-title" style={{fontFamily:"serif"}}><strong>Interview Bit</strong></h5>
      <a class="btn btn-primary" href="https://www.interviewbit.com/profile/surya-narayanan_574/">View Profile</a>
    </div>
    </div>            
              
               </div>
             </ul> 
          </div>
                
          </Fade>
        </div>
        
    )
}

export default Skills
