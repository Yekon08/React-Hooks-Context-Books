import React, { useState, createContext } from 'react'

// Create Context
export const ThemeContext = createContext()

// Create Provider Component
export const ThemeContextProvider = (props) => {

    const [isLightTheme, setIsLightTheme] = useState(true)
    console.log('state: ', isLightTheme)

    // Initial State 
    const initialState = {
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    }

    const toggleTheme = () => {
        setIsLightTheme(prevState => !prevState)
    }
   
    return (
        <ThemeContext.Provider value={{...initialState, toggleTheme, isLightTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}