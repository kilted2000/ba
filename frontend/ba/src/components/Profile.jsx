//import React from 'react';
import  { useState } from 'react';
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";

const Profile = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <>
      {isSubmitted ? <ProfileDisplay /> : <ProfileForm onSubmit={handleFormSubmit} />}
    </>
  );
};

export default Profile;