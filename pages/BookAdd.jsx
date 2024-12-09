const { useParams, useNavigate, Link } = ReactRouterDOM
import { bookService } from "../services/book.service.js"
import { showErrorMsg,showSuccessMsg } from "../services/event-bus.service.js"


const { useState, useEffect ,useRef} = React

export function BookAdd() {

    const navigate = useNavigate()
    const [googleBook, setGoogleBook] = useState(null)
    const googleBooks=[
            {id:"123",title:"book1"},
            {id:"124",title:"book2"},
            {id:"125",title:"book3"}
    ]
    function OnAddGoogleBook(item){
        bookService.addGoogleBook(item)
        .then((newBook)=>newBook? showSuccessMsg("Google Book Added"):showErrorMsg("ID already Exist"))
    }

    useEffect(()=>{
        },
    [])
    

    return (
        <section className="book-add">
            <div className="google-books-list-div">
                {googleBooks.map((googleBook)=>{
                            return (
                                <ul key={googleBook.id}>
                                    <li>{googleBook.title} <button onClick={()=>OnAddGoogleBook(googleBook)}>+</button></li>  
                                </ul>
                            )
                        })
                }
            </div>
       </section>
    )
}

