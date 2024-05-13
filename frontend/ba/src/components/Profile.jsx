//import React from 'react';
// import  { useState, useEffect } from 'react';
// import ProfileForm from "./ProfileForm";
// import ProfileDisplay from "./ProfileDisplay";

// // const Profile = () => {
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const handleFormSubmit = () => {
// //     setIsSubmitted(true);
// //   };
// //   return (
// //     <>
// //       {isSubmitted ? <ProfileDisplay /> : <ProfileForm onSubmit={handleFormSubmit} />}
// //     </>
// //   );
// // };

// // export default Profile;
// const Profile = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/:userId"); 
//         if (!response.ok) {
//           console.error('Server error:', await response.text());
//         } else {
//           try {
//             const data = await response.json();
//             setUsers(Object.values(data.data));
//           } catch (error) {
//             console.error('Error parsing JSON:', error);
//           }
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };
//     fetchUserProfile().then(profile => {
//       setUserProfile(profile);
//       setIsLoading(false);
//     });
//   }, []);

//   const handleFormSubmit = () => {
//     setIsSubmitted(true);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>; // Replace with your actual loading component
//   }

//   return (
//     <>
//       {userProfile ? <ProfileDisplay /> : <ProfileForm onSubmit={handleFormSubmit} />}
//     </>
//   );
// };

// export default Profile;
import { useState, useEffect } from 'react';
//import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import { useParams } from 'react-router-dom';
import Loading from './Loading';
const Profile = () => {
  //const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/users/${userId}`); 
        if (!response.ok) {
          console.error('Server error:', await response.text());
        } else {
          try {
            const data = await response.json();
            setUserProfile(data.data);
            setIsLoading(false);
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [userId]);

  // const handleFormSubmit = (profileData) => {
  //   // Update the state with the submitted profile data
  //   setUserProfile(profileData);
  // };

  if (isLoading) {
    return (<Loading />) // Render a loading message while data is being fetched
  } else {
    return <ProfileDisplay userProfile={userProfile} />; // Render the profile display once data is fetched
  }
  // if (isLoading) {
  //   return <div>Loading...</div>; // Replace with your actual loading component
  // }

  // return (
  //   <>
  //     {userProfile ? <ProfileDisplay /> : <ProfileForm onSubmit={handleFormSubmit} />}
  //   </>
  // );
};

export default Profile;