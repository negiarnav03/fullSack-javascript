import React, {useContext} from 'react'
import userContext from '../context/UserContext'

function Profile() {

    const {user} =useContext(userContext);

    if(!user) return <div>Please Login</div>
    
    return (
        <div>
            <h1>welcome : {user.username}</h1>
        </div>
    )
}

export default Profile