import React, { useState, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

 const BookForm = (props) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBook(title)
        setTitle('')
    }

    const context = useContext(ThemeContext)
    const { isLightTheme, light, dark } = context
    const theme = isLightTheme ? light : dark

    return (
        <form onSubmit={handleSubmit}>
            <input className='book-form' style={{ color: theme.syntax, background: theme.ui}} type='text' placeholder='Book name... (enter to confirm)' value={title} required onChange={(e) => {setTitle(e.target.value)}} />
        </form>
    )
}

export default BookForm