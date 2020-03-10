import React, { useState } from 'react'

 const BookForm = (props) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBook(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Book name:</label>
            <input type='text' value={title} required onChange={(e) => {setTitle(e.target.value)}} />
            <input type='submit' value='add book' />
        </form>
    )
}

export default BookForm