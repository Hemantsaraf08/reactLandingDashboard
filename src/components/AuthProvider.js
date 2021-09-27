import React,{useState} from 'react'

export const UserContext=React.createContext();

function AuthProvider({children}) {
    // const toggleUser=()=>{
    //     setloginState({...loginState, currUser:!loginState.currUser})
    // }
    const[currUser,setcurrUser] =useState(1);
    //     currUser:0,
    //     setCurrUser: toggleUser
    // });
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
