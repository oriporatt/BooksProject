const { useState, useEffect } = React
import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"



export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
    }
    if (!books) return <div>Loading Books...</div>

    return (
        <section className="book-index">
            <BookList
                books={books}
            />

       </section>
    )
}

