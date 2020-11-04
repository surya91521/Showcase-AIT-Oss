import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/skills.jpg'
              text='Skills'
              path='/skills'
            />
            <CardItem
              src='images/projects.jpg'
              text='My Projects'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/courses.jpg'
              text='Courses Certificates'
              path='/courses'
            />
            <CardItem
              src='images/coding.jpg'
              text='Coding and Blogs'
              path='/coding'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/awards.jpg'
              text='Award and Honours'
              path='/awards'
            />
                <CardItem
              src='images/intern.jpg'
              text='Internships'
              path='/internships'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;