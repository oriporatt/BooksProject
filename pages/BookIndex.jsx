const { useState, useEffect } = React
const {NavLink ,useSearchParams} = ReactRouterDOM


import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { showErrorMsg,showSuccessMsg } from "../services/event-bus.service.js"
import { utilService } from "../services/util.service.js"
import { getTruthyValues } from "../services/util.service.js"



export function BookIndex() {
    const [searchParams,setSearchParams]=useSearchParams()
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.filterFromSearchParams(searchParams))

    useEffect(() => {
        setSearchParams(getTruthyValues(filterBy))
        loadBooks()
    }, [filterBy])



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
            <button><NavLink to="/book/add" className="add-button">Add Book from Google</NavLink></button>

            {(books.length===0)&&<div>No books in filter</div>}

            <BookList 
                books={books} 
                removeBook={removeBook}
            />



       </section>
    )
}

