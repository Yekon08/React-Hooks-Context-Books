import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
    const themeContext = useContext(ThemeContext)
    const { isLightTheme, light, dark } = themeContext
    const theme = isLightTheme ? light : dark
    console.log('theme Context: ', theme)

    const authContext = useContext(AuthContext)
    const { isAuthenticated, toggleAuth } = authContext
    console.log('auth Context: ', authContext)

    return (
        <nav style={{ background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged In' : 'Logged out' }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar