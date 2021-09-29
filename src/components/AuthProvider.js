import React,{useState} from 'react'

export const UserContext=React.createContext();

function AuthProvider({children}) {
    const[currUser,setcurrUser] =useState(0);
    const value={
        currUser, 
        setcurrUser
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthProvider
