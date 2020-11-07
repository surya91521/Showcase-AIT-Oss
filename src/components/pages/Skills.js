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
    return (
        <div className ="toppskills " style ={{ 'background': 'url('+process.env.PUBLIC_URL + '/assets/images/back.jpg) center center/cover no-repeat'}}>
         <div className="topsskills container"> 
          <div className="heading" style={{marginBottom:"50px"}}>
          <h1 style={{fontFamily:"serif" ,justifyContent:"center",color:"#fff"}}>Skills section</h1> 
          </div>        
          <div className="row justify-content-center ">

            <div className="col-md-6 justify-content-center"  style={{marginBottom:"40px"}}>
             <h3 style={{marginBottom:"30px" , fontFamily:"serif",color:"#fff"}}> Technical Skills</h3> 
             <i className="fas fa-question"></i>  C/C++<Progress done="85"/>
             <FontAwesomeIcon icon={faJava} size="1x" className="Ja"/>  Java <Progress done="70"/>
             <FontAwesomeIcon icon={faAndroid} size="1x" className="An"/> Android<Progress done="80"/>
             <i className="fa fa-database fa-1x" > </i> SQL<Progress done="90"/>
             <i className="fa fa-leaf fa-1x"> </i> Mongo-DB<Progress done="50"/>
             <FontAwesomeIcon icon={faGithub} size="1x" className="gi"/> GitHub<Progress done="70"/>
             <FontAwesomeIcon icon={faReact} size="1x" className="re"/> React<Progress done="40"/>
             <i className="fa fa-fire fa-1x"> </i>  Firebase<Progress done="70"/>
             <FontAwesomeIcon icon={faHtml5} size="1x" className="ht"/> HTML<Progress done="40"/>
             <FontAwesomeIcon icon={faCss3} size="1x" className="cs"/> CSS<Progress done="40"/>
            </div> 
            <div className="col-md-6 justify-content-center">
             <h3 style={{marginBottom:"30px" , fontFamily:"serif",color:"#fff"}}> Soft Skills</h3> 
             TeamWork<Progress done="90"/>
              Time Managaement<Progress done="80"/>
              Creative Thinker<Progress done="65"/>
              Problem Solving<Progress done="80"/>
              Adaptability<Progress done="90"/>
            </div>   
            </div>
          </div>
        </div>
    )
}

export default Skills
