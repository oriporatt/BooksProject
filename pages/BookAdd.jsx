const { useParams, useNavigate, Link } = ReactRouterDOM
import { bookService } from "../services/book.service.js"
import { googleBookService,testObject } from "../services/googleBookService.js"
import { BookAddSon } from "../cmps/BookAddSon.jsx"


const { useState, useEffect ,useRef} = React

export function BookAdd() {
    
    const navigate = useNavigate()
    const [googleSearchBoxMain, setGoogleSearchBookMain] = useState("")
    const [googleBooksList, setGoogleBookList] = useState("")

    useEffect(()=>{
        if (googleSearchBoxMain){
            newSearch(googleSearchBoxMain)
        }
        },
    [googleSearchBoxMain])

    function onChangeSearch(googleSearchBoxSon){
        setGoogleSearchBookMain(googleSearchBoxSon)
    }

    function newSearch(googleSearchBoxMain){
        googleBookService.query(googleSearchBoxMain)
        .then(data=>googleBookService.importSearchObject(data))
        .then(setGoogleBookList)
    }

    
    return (
        <section className="book-add">
        <BookAddSon googleBooksList={googleBooksList} onChangeSearch={onChangeSearch}/>
       </section>
    )
}

