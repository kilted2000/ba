
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
//import { CldImage, CldUploadWidget } from "@cloudinary/url-gen";


//pass {images} as a prop to ProfileForm
const ProfileForm = ( ) => {
  const { isAuthenticated } = useAuth0();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState([]);
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('');
  const [personality, setPersonality] = useState('');
  
//   function handlePhotoUpload(result) {
//     console.log(result);
//   }



  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { firstName, lastName, email, dogName, breed, personality };
    console.log(newUser)
    fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
      
    })
    
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    isAuthenticated && (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Dog&#39;s Name:
        <input type="text" value={dogName} onChange={e => setDogName(e.target.value)} />
      </label>
      <label>
        Breed:
        <input value={breed} onChange={e => setBreed(e.target.value)} />
      </label>
      <label>
        Doggie Personality:
        <textarea value={personality} onChange={e => setPersonality(e.target.value)} />
      </label>
      {/* <label>
        Photos of Doggie: */}
         {/* <CldUploadWidget uploadPreset="barkamigos-dog-photos" onUpload={handlePhotoUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button className="button" onClick={handleOnClick}>
                Upload an Image
              </button>
            );
          }}
        </CldUploadWidget>  
      </label>
       <ul>
        {images?.map(image => {
          return (
            <li key={image.id}>
              <CldImage
                width="200"
                height="200"
                crop="fill"
                src={image.image}
                alt={image.title}
              />
            </li>
  
          );
        })}
      </ul>   */}
     
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck3"
          aria-describedby="invalidCheck3Feedback"
          required
        />
        <label className="form-check-label" htmlFor="invalidCheck3">
          Agree to terms and conditions
        </label>
        <div id="invalidCheck3Feedback" className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>

      <button type="submit" onSubmit={handleSubmit}>Save Profile</button>
    </form>
  ));
};


ProfileForm.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProfileForm;