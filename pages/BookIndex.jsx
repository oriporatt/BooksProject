const { useState, useEffect } = React
import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"



export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    // why didnt work?
    // useEffect(() => {
    //     if (books && books.length===0){
    //         loadBooks()
    //     }
    // }, [books])


    function loadBooks() {
        bookService.query()
            .then(setBooks)
    }

    function removeBook(bookID) {
        bookService.remove(bookID)
        .then(()=>
            setBooks(books.filter((book)=>book.id!=bookID))
        )
    }
    if (!books) return <div>Loading Books...</div>
    if (books.length===0) return <div>No books left..</div>


    return (
        <section className="book-index">
            <BookFilter/>
            <BookList
                books={books} 
                removeBook={removeBook}
            />

       </section>
    )
}

