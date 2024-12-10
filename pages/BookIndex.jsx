const { useState, useEffect,useRef } = React
const {NavLink ,useSearchParams,useNavigate} = ReactRouterDOM


import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { showErrorMsg,showSuccessMsg } from "../services/event-bus.service.js"
import { utilService } from "../services/util.service.js"
import { getTruthyValues } from "../services/util.service.js"
import { animateCSS } from "../services/util.service.js"



export function BookIndex() {
    const [searchParams,setSearchParams]=useSearchParams()
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.filterFromSearchParams(searchParams))
    
    const refEl = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        setSearchParams(getTruthyValues(filterBy))
        loadBooks()
    }, [filterBy])

    function onClickAnimation(){
        animateCSS(refEl.current,'heartBeat')
        .then(()=>{
                navigate("/book/edit"); // Navigate after animation
        })
    }

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
            {/* regular: */}
            {/* <button ><NavLink to="/book/edit"  className="add-button">Add Book</NavLink></button> */}
            
            {/* with animation navigate will perform from button function*/}
            <button ref={refEl} onClick={onClickAnimation}><span className="add-button">Add Book</span></button>
            
            
            <button ><NavLink to="/book/add" className="add-button">Add Book from Google</NavLink></button>

            {(books.length===0)&&<div>No books in filter</div>}

            <BookList 
                books={books} 
                removeBook={removeBook}
            />



       </section>
    )
}

