const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM
import { bookService } from "../services/book.service.js"

export function BookDetails() {

    const [book,setBook]=useState(null)
    const params = useParams()
        
    useEffect(()=>{
        loadBook(params.bookId)
    },[params.bookId]
    )

    function loadBook(bookId){
        bookService.get(bookId)
            .then((newBook)=>setBook(newBook))

    }

    if (!book) return <div>Loading  Book..</div>

    return (

        <section className="book-details">
            <h2>{book.title}</h2>
            <div className="book-row-data" >
                
                <h3>
                    {book.authors.length==1? "Author: ":"Authors: "}
                    {book.authors.join(",")}
                </h3>
                <h4>
                    {book.categories.length==1? "Category: ":"Categories: "}
                    {book.categories.join(",")}
                </h4>
                <h4>Publish Year: {book.publishedDate}</h4>
                <h5>Language: {book.language}</h5>
            </div>

            <br></br>
            <h3>{book.subtitle}</h3>
            <p>{book.description} </p>
            

            
            <h4> Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <h5> USD Price: {book.listPrice.dollarPrice} $</h5>
            <img src={book.thumbnail} alt="book-image" />
        </section>
    )
}



