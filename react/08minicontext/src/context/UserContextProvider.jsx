import React, {useState} from 'react'
import userContext from './UserContext'


const UserContextProvider=({children})=> {
    // children are basically components that needs to be wrapped by the context provider.
    // it wraps the children components and provides the value to them
    // whatever comes from children it passes it to the userContext.Provider
    
    const [user,setUser] = useState(null);

    return(
        <userContext.Provider value={{user,setUser}}>{/* we use 'value' prop to pass the value to the children components  */}
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider