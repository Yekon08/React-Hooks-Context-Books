import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import BookForm from './BookForm'
import { BookContext } from '../contexts/BookContext'

const BookList = () => {

    const contextTheme = useContext(ThemeContext)
    const { isLightTheme, light, dark } = contextTheme
    const theme = isLightTheme ? light : dark

    const contextBook = useContext(BookContext)

    const addBook = (title) => {
        contextBook.setBooks([...contextBook.books, { title , id: contextBook.books.length+1 }])
    }

    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {contextBook.books.map(book => {
                    return ( <li key={book.id} style={{ background: theme.ui}}>{book.title}</li> )
                })}
            </ul>
            <BookForm addBook={addBook} />
        </div>
    )
}

export default BookList