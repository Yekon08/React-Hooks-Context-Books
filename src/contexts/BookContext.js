import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'the way of kings', id: 1 },
        { title: 'the name of the winds', id: 2 },
        { title: 'the final empire', id: 3 }
    ])

    return(
        <BookContext.Provider value={{books, setBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}
