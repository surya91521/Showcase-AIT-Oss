import React from 'react';
import '../../App.css'
import './Skills.css'

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
        <div className ="toppskills">
          <h1 style={{fontFamily:"serif"}}>Skills section</h1> 
          <div className="skills-container">
            <div className="Tech">
             <h3> Technical Skills</h3> 
             <div className ="elementss" style={{justifyContent:"left"}}> 
            HTML   <Progress done="70"/>
            </div>
            <Progress done="70"/>
            <Progress done="70"/>
            </div>  
          </div> 
        </div>
    )
}

export default Skills
