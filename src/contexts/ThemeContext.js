import React, { createContext, useReducer } from 'react'
import ThemeReducer from './ThemeReducer'

// Initial State 
const initialState = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    text: 'test de texte'
}

// Create Context
export const ThemeContext = createContext(initialState)

// Create Provider Component
export const ThemeContextProvider = (props) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState)

    // Actions
    function ToggleTheme(isLightTheme) {
        dispatch({
            type: 'TOGGLE_THEME',
            payload: isLightTheme
        })
    }
   
    return (
        <ThemeContext.Provider value={{...initialState, ToggleTheme, isLightTheme: state.isLightTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}