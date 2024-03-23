"use client"
//import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBone } from '@fortawesome/free-solid-svg-icons';
//import PageLink from './PageLink';
//import AnchorLink from './AnchorLink';
import { Link } from "react-router-dom";

const Hero = () => {
  const { loginWithRedirect } = useAuth0()
return(
  <>
<div className="row testing ">
 
              <div className="col-md-6 col-sm-12 ">
                <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
                <button type="button" className="btn btn-dark btn-lg download-button">
                  <FontAwesomeIcon icon={faPaw} />
                
                  <Link onClick={() => loginWithRedirect()}>
                        Log In
                      </Link>
                  
                </button>
                <button type="button" className="btn btn-dark btn-lg download-button">
                  <FontAwesomeIcon icon={faBone} /> Sign Up
                </button>
              </div>
              <div className="phone-img col-md-6 col-sm-12">
                <img className="rotate_image img-fluid title-image" src="/assets/img-clear.jpeg" alt="logo-mockup" />
              </div>
              </div>
            
            </>
)};

export default Hero;
