import React from 'react';
import './Footer.css';
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

function sendEmail(e){

      e.preventDefault();

      emailjs.sendForm('gmail', 'template_argvovo', e.target, 'user_CWrEbev5HvwxbNsKP6nh1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

}

function Footer() {
  return (
    <div className='footer-container' style={{paddingBottom:"30px"}}>
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
      <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
      </div>
    </div>
  );
}

export default Footer;