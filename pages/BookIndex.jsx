const { useState, useEffect } = React
const {NavLink } = ReactRouterDOM


import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { showErrorMsg,showSuccessMsg } from "../services/event-bus.service.js"



export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    // why didnt work?
    // useEffect(() => {
    //     if (books && books.length===0){
    //         loadBooks()
    //     }
    // }, [books])


    function loadBooks() {
        bookService.query(filterBy)
            .then(setBooks)
    }

    function removeBook(bookID) {
        bookService.remove(bookID)
        .then(()=>
            setBooks(books.filter((book)=>book.id!=bookID))
        )
        .then(showSuccessMsg('Book removed successfully'))
    }

    function onSetFilter(newFilter){
        setFilterBy(oldFilter=>({...oldFilter,...newFilter}))
    }


    if (!books) return <div>Loading Books...</div>
   

    return (
        <section className="book-index">
            <BookFilter
            defaultFilter={filterBy}
            onSetFilter={onSetFilter}
            />
            <button><NavLink to="/book/edit" className="add-button">Add Book</NavLink></button>
            {(books.length===0)&&<div>No books in filter</div>}

            <BookList 
                books={books} 
                removeBook={removeBook}
            />



       </section>
    )
}

