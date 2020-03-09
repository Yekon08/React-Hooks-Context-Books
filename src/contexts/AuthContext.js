import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

// False Auth

export const AuthContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const toggleAuth = () => {
        setIsAuthenticated(prevState => !prevState)
    }

    return(
        <AuthContext.Provider value={{toggleAuth, isAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
}