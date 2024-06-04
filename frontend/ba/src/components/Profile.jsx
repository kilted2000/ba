
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileDisplay from "./ProfileDisplay";
import ProfileForm from './ProfileForm';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();
  const [userProfile, setUserProfile] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/api/v2/',
            scope: 'read:users',
            prompt: 'consent',
          }
        });
        console.log('Token:', token);

        const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const userData = await response.json();

        if (isMounted) {
          setUserProfile(userData);
          setIsLoading(false);
        }
      } catch (e) {
        console.error(e);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; 
    };
  }, [getAccessTokenSilently, userId]);

  if (isLoading) {
    return <Loading />;
  } else {
    return userProfile ? <ProfileDisplay userProfile={userProfile} /> : <ProfileForm />;
  } 
};

export default Profile;

// // export default Profile;
// import { useState, useEffect } from 'react';
// //import ProfileForm from "./ProfileForm";
// import { useAuth0 } from '@auth0/auth0-react';
// import ProfileDisplay from "./ProfileDisplay";
// import { useParams } from 'react-router-dom';
// import Loading from './Loading';
// const Profile = () => {
//   //const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const { getAccessTokenSilently } = useAuth0();
//   const [userProfile, setUserProfile] = useState(null);
//   const { userId } = useParams();

//   useEffect(() => {
//     (async () => {
//       try {
//         const token = await getAccessTokenSilently({
//           authorizationParams: {
//             audience: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/api/v2/',
//             scope: 'read:current_user',
            
//           }
//         });
//         console.log('Token:', token); 
//         const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserProfile(await response.json());
//         setIsLoading(false);
//       } catch (e) {
//         console.error(e);
//       }
//     })();
//   }, [getAccessTokenSilently, userId]);

//   if (isLoading) {
//     return  (<Loading />)
//   }else {
//        return <ProfileDisplay userProfile={userProfile} />;

// }
// }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8080/api/users/${userId}`); 
  //       if (!response.ok) {
  //         console.error('Server error:', await response.text());
  //       } else {
  //         try {
  //           const data = await response.json();
  //           setUserProfile(data.data);
  //           setIsLoading(false);
  //         } catch (error) {
  //           console.error('Error parsing JSON:', error);
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  //   };
  //   fetchData();
  // }, [userId]);

  // const handleFormSubmit = (profileData) => {
  //   // Update the state with the submitted profile data
  //   setUserProfile(profileData);
  // };

  // if (isLoading) {
  //   return (<Loading />) // Render a loading message while data is being fetched
  // } else {
  //   return <ProfileDisplay userProfile={userProfile} />; // Render the profile display once data is fetched
  // }
  // if (isLoading) {
  //   return <div>Loading...</div>; // Replace with your actual loading component
  // }

  // return (
  //   <>
  //     {userProfile ? <ProfileDisplay /> : <ProfileForm onSubmit={handleFormSubmit} />}
  //   </>
  // );
//};

//export default Profile;