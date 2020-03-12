import React, { useState, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import BookForm from './BookForm'

const BookList = () => {

    const context = useContext(ThemeContext)
    const { isLightTheme, light, dark } = context
    const theme = isLightTheme ? light : dark

    const [books, setBooks] = useState([
        { title: 'the way of kings', id: 1 },
        { title: 'the name of the winds', id: 2 },
        { title: 'the final empire', id: 3 }
    ])

    const addBook = (title) => {
        setBooks([...books, { title , id: books.length+1 }])
    }

    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {books.map(book => {
                    return ( <li key={book.id} style={{ background: theme.ui}}>{book.title}</li> )
                })}
            </ul>
            <BookForm addBook={addBook} />
        </div>
    )
}

export default BookList