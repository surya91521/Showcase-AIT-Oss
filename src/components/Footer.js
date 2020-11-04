import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer-container'>
      <h3>Follown Me On</h3>
      <section className='footer-subscription'>
      <div class="social-container">
      
      <a href="https://github.com/surya91521"
            className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a href="https://www.facebook.com/surya.frost.144/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://twitter.com/surya915211" 
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a href="https://www.instagram.com/_hades_009/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
     </div>
      </section>
     <p>Phone No : +91 8427516566</p>
     <br></br>
     <p>Email Id : surya91521@gmail.com</p> 
    </div>
  );
}

export default Footer;