"use client"
//import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBone } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
const Cta = () => {
  const { loginWithRedirect } = useAuth0()

  
    return(    <div id="cta">
    <h3 className="cta-text">Find Your Furry Friends, Furry Friend Today.</h3>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faPaw} />   (
                    <Link  onClick={() => loginWithRedirect()}>
                        Log In
                     
                    </Link>
                  )
    </button>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faBone} />  Sign Up
    </button>
  </div>)

}


export default Cta