import { useState, useEffect} from "react";
//import { ProfileForm } from "./ProfileForm";

const ProfileDisplay = () => {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        try {
            //update fetch url
          const response = await fetch("http://localhost:8080/api/users/:userId"); 
          if (!response.ok) {
            console.error('Server error:', await response.text());
          } else {
            try {
              const data = await response.json();
              setUser(Object.values(data.data));
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div style={{border: '3 solid black'}} >
         
        <h3>Your Profile</h3>
          <p key={user.id}>
            First Name: {user.firstName}, 
            Last Name: {user.lastName}, 
            Email: {user.email},
            Dog Name: {user.dogName},
            Breed: {user.breed}, 
            Personality: {user.personality}
          </p>
        <button>Edit Profile</button>
        {/* return to ProfileForm when button is clicked */}
      </div>
    )
}


export default ProfileDisplay;