//import React from 'react';

import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
const Profile = () => {
    return(
        <>
{/* is handlesubmit clicked? If no then render */}
<ProfileForm />
{/* is yes then render ProfileDisplay */}
<ProfileDisplay />
</>
)};


export default Profile