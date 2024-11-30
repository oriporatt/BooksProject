const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM
import { bookService } from "../services/book.service.js"

import { LongTxt } from "../cmps/LongTxt.jsx"


export function BookDetails() {

    const [book,setBook]=useState(null)
    const params = useParams()
    const navigate = useNavigate()

        
    useEffect(()=>{
        loadBook(params.bookId)
    },[params.bookId]
    )

    function loadBook(bookId){
        bookService.get(bookId)
            .then((newBook)=>setBook(newBook))

    }

    function onBack() {
        navigate('/book')
  
    }


    function calcReadingLevel(book){
        var titleColor=""
        var oututTxt=""
        if (book.pageCount>500) {
            titleColor="darkred"
            oututTxt="Serious Reading"
        }else if (book.pageCount>200) {
            titleColor="#b36200"
            oututTxt= "Decent Reading"
        }
        else if (book.pageCount<100) {
            titleColor="darkgreen"
            oututTxt= "Light Reading"
        }
        else {
            titleColor=""
            oututTxt= ""
        }
        return [titleColor,oututTxt]

    }

    function calcNewOld(book){
        
        const nowYear = new Date().getFullYear()
        const delta=nowYear-book.publishedDate

        var outputTxt=""
        var bgcolor=""
        if (delta>=10){
            outputTxt="Vintage"
            bgcolor="Bisque"
        }else if  (delta<=1){
            outputTxt="New"
            bgcolor="Cyan"
        }
        return [bgcolor,outputTxt]

    }

    function  calcAmountColor (book) {
        if (book.listPrice.dollarPrice>=150)
            return "high-price"
        else if (book.listPrice.dollarPrice<=20)
            return "low-price"
        else return ""
    }




    if (!book) return <div>Loading  Book..</div>

    const [titleColor, oututTxt] = calcReadingLevel(book)

    const [newOldcBGClr, newOldTxt] = calcNewOld(book)

    
    return (

        <section className="book-details">
            <h2>
                {book.title+"  "} 
                {book.listPrice.isOnSale?<span style={{backgroundColor: "lightgreen"}}>Sale!!</span>:""}
            </h2>
            <div className="book-row-data" >
                
                <h3>
                    {book.authors.length==1? "Author: ":"Authors: "}
                    {book.authors.join(",")}
                </h3>
                <h4>
                    {book.categories.length==1? "Category: ":"Categories: "}
                    {book.categories.join(",")}
                </h4>
                <h4>
                    Publish Year: {book.publishedDate+"  "}
                    <span style={{backgroundColor: newOldcBGClr}}>{newOldTxt}</span>

                </h4>
                <h5>Language: {book.language}, Pages:  {book.pageCount}</h5>
            </div>
            <h4 style={{color: titleColor}}> {oututTxt}</h4>


            <br></br>
            <h3>{book.subtitle}</h3>
           
            <LongTxt
                txt={book.description}
                length={50}
            />
            

            
            <h4> Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <h4 className={calcAmountColor (book)}> 
                USD Price: {book.listPrice.dollarPrice} $
            </h4>
            <img src={book.thumbnail} alt="book-image" />
            <br></br>
            <section>
                <button onClick={onBack}>Back</button>
                <button><Link to={`/book/${book.prevBookId }`}>Prev Book</Link></button>
                <button><Link to={`/book/${book.nextBookId }`}>Next Book</Link></button>
            </section>
        </section>
    )
}



