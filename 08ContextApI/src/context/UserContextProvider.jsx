import React from 'react'
import UserContext from './Usercontext'

const UserContextProvider=({children})=>{
    const [user,Setuser ]  = React.useState(null)
 return(
    <UserContext.Provider value ={{user,Setuser}}>
    {children}
    </UserContext.Provider>
 )
}



export default UserContextProvider
