import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Fade from 'react-reveal/Fade'

function Cards() {
  return (
    <div className='cards' style ={{ 'background': 'url('+process.env.PUBLIC_URL + '/assets/images/back.jpg) center center/cover no-repeat'}}>
      <Fade Top>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/skills.jpg'
              text='Skills'
              path='/Skills'
            />
            <CardItem
              src='/assets/images/projects.jpg'
              text='My Projects'
              path='/Projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/courses.jpg'
              text='Courses Certificates'
              path='/Courses'
            />
            <CardItem
              src='/assets/images/coding.jpg'
              text='Coding and Blogs'
              path='/Coding'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='/assets/images/awards.jpg'
              text='Award and Honours'
              path='/Awards'
            />
                <CardItem
              src='/assets/images/intern.jpg'
              text='Internships'
              path='/Internships'
            />
          
          </ul>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Cards;