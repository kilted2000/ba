
//import React from 'react';
//import { useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faBone } from "@fortawesome/free-solid-svg-icons";
//import PageLink from './PageLink';
//import AnchorLink from './AnchorLink';
import { Link } from "react-router-dom";

const Hero = () => {
  //const [users, setUsers] = useState([]);
 

  const { loginWithRedirect } = useAuth0();

  // const fetchData = async () => {
  //   const response = await fetch("http://localhost:8080/"); 
  //   if (!response.ok) {
  //     console.error('Server error:', await response.text());
  //   } else {
  //     try {
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error('Error parsing JSON:', error);
  //     }
  //   }
  // };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/"); 
  //     if (!response.ok) {
  //       console.error('Server error:', await response.text());
  //     } else {
  //       try {
  //         const data = await response.json();
  //         setUsers(Object.values(data.data));
  //       } catch (error) {
  //         console.error('Error parsing JSON:', error);
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <>
      <div className="row testing ">
        <div className="col-md-6 col-sm-12 ">
          <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
          {/* <div style={{color: 'white'}} >
         
            {users.map((user) => (
              <p key={user.id}>
                First Name: {user.firstName}, Last Name: {user.lastName}, Email: {user.email},Dog Name: {user.dogName}, Breed: {user.breed}, Personality: {user.personality}
              </p>
            ))}
          </div> */}
          <Link onClick={() => loginWithRedirect()}>Log In</Link>

          <button type="button" className="btn btn-dark btn-lg download-button">
            <FontAwesomeIcon icon={faPaw} />
          </button>

          <button type="button" className="btn btn-dark btn-lg download-button">
            <FontAwesomeIcon icon={faBone} /> Sign Up
          </button>
        </div>
        <div className="phone-img col-md-6 col-sm-12">
          <img
            className="rotate_image img-fluid title-image"
            src="/assets/img-clear.jpeg"
            alt="logo-mockup"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
