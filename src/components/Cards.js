import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Fade from 'react-reveal/Fade'

function Cards() {
  return (
    <div className='cards' style ={{backgroundColor:"#93A8AC"}}>
      <Fade Top className="container">
       <div className="container"> 
      <div className='row ' style={{maxWidth:"1120px"}}>
          
          <div className="col-md-4">
            <CardItem
              className='col-md-4'
              src='/assets/images/skills.jpg'
              text='Skills'
              path='/Skills'
            />
            </div>
             <div className="col-md-4">
            <CardItem
            className='col-md-4'
              src='/assets/images/projects.jpg'
              text='My Projects'
              path='/Projects'
            />
            </div>
            <div className="col-md-4">
            <CardItem
            className='col-md-4'
              src='/assets/images/courses.jpg'
              text='Courses Certificates'
              path='/Courses'
            />
            <br />
            <br />
            </div>
             <div className="col-md-4">
            <CardItem
            className='col-md-4'
              src='/assets/images/coding.jpg'
              text='Articles and Blogs'
              path='/Coding'
            />
            </div>
            <div className="col-md-4">
          <CardItem
          className='col-md-4'
              src='/assets/images/awards.jpg'
              text='Achievements'
              path='/Awards'
            />
            </div>
             <div className="col-md-4">
                <CardItem
                className='col-md-4'
              src='/assets/images/intern.jpg'
              text='Work Experienece'
              path='/Internships'
            />
            </div>
          
        </div>
        </div>
      </Fade>
    </div>
  );
}

export default Cards;