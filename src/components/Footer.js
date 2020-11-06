import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer-container'>
      <h3 style={{fontFamily:"serif"}}>Follow Me On</h3>
   
      <div className="social-container">
      
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
      <a href="https://www.linkedin.com/in/s-suryanarayanan-04b600188/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
      </a>
      
     </div>
     <div className='last'>
      <p style={{fontFamily:"serif"}}>
       Phone No : +91 8427516566<br/><br />
      Email Id : surya91521@gmail.com
      </p>
      </div>
    </div>
  );
}

export default Footer;