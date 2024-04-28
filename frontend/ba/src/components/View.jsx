import { useState, useEffect} from "react";


const View = () => {

    const [users, setUsers] = useState([]);
 
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/"); 
        if (!response.ok) {
          console.error('Server error:', await response.text());
        } else {
          try {
            const data = await response.json();
            setUsers(Object.values(data.data));
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
  
    return(
    <div style={{border: '3 solid black'}} >
         
    {users.map((user) => (
      <p key={user.id}>
        First Name: {user.firstName},
        Last Name: {user.lastName}, 
        Email: {user.email},
        Dog Name: {user.dogName}, 
        Breed: {user.breed}, 
        Personality: {user.personality}
      </p>
    ))}
  </div>)
}


export default View;