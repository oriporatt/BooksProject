const { useParams, useNavigate, Link } = ReactRouterDOM
import { bookService } from "../services/book.service.js"
import { debounce } from "../services/util.service.js"

import { googleBookService,testObject } from "../services/googleBookService.js"

import { showErrorMsg,showSuccessMsg } from "../services/event-bus.service.js"


const { useState, useEffect ,useRef} = React

export function BookAddSon({onChangeSearch,googleBooksList}) {
    
    const navigate = useNavigate()
    const [googleSearchBox, setGoogleSearchBook] = useState("")
    const onChangeSearchDebounce = useRef(debounce(onChangeSearch)).current

    useEffect(() => {
        onChangeSearchDebounce(googleSearchBox)
    }, [googleSearchBox])


    // const [googleBooksList, setGoogleBookList] = useState("")


    function OnAddGoogleBook(item){
        bookService.addGoogleBook(item)
        .then((newBook)=>{
            newBook? showSuccessMsg("Google Book Added"):showErrorMsg("ID already Exist")
            navigate(`/book/${newBook.id}`)
        })
        
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setGoogleSearchBook(value)
    }


    
    function onSearchButtonClick(ev){
        ev.preventDefault()
        onChangeSearch(googleSearchBox)

    }
    
    return (
        <section className="book-add-son">
            <h4>Search for books in google:</h4>
            <form  onSubmit={onSearchButtonClick} >
                <label htmlFor="searchGoogleBook">Book Name / Title? </label>
                <input value={googleSearchBox} onChange={handleChange} type="text" name="googleSearchBox" id="googleSearchBox"  style={{width: '250px'}}/>
            </form>
            {googleBooksList&&
            <div className="google-books-list-div">
                {googleBooksList.map((googleBook)=>{
                            return (
                                <ul key={googleBook.id}>
                                    <li className="google-book-item">{googleBook.title} <button onClick={()=>OnAddGoogleBook(googleBook)}>+</button></li>  
                                </ul>
                            )
                        })
                }
            </div>}
       </section>
    )
}

