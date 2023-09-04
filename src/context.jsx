import { useState, useEffect, createContext, } from "react";
import { auth } from "./firebase/firebase.utils";

export const ContextUser = createContext(null)

export const ContextApi = ({children}) => {
    let [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(user => {
           setCurrentUser(user)
       })
    }, [])
    
   const value = {
        currentUser
    }
    return (
        <ContextUser.Provider value={value}>{ children}</ContextUser.Provider>
    )
}