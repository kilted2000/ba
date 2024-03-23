//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF,faInstagram,} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
const Footer = () => (

  <div id="footer" >
  <Link to="https://twitter.com/RichardWhitDev" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faTwitter} className='sm' /></Link>
  <Link to="https://www.facebook.com/richard.whittington.35" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} className='sm' /></Link>
  <Link to="https://www.instagram.com/rlwhttng/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='sm' /></Link>
  <Link to="mailto:richardlwhittington@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='sm' /></Link>
  <p className="copyright-text">©Copyright 2024 MilieDog Enterprises</p>
</div>
);

export default Footer;