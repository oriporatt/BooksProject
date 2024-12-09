const { useParams, useNavigate, Link } = ReactRouterDOM
import { bookService } from "../services/book.service.js"


const { useState, useEffect ,useRef} = React

export function BookEdit() {

    const {bookId}= useParams()
    const navigate = useNavigate()
    const [bookToEdit, setBookToEdit] = useState(null)



    
    useEffect(()=>{
        if (bookId){
            loadBook(bookId)
        }else{
            setBookToEdit(bookService.getEmptyBook)
        }
        },
        [])




    

    function handleChange({ target }) {
        let { value, name: field } = target

        switch (target.type) {
            case 'range':
            case 'number':
                value = +target.value
                break
            case 'checkbox':
                value = target.checked
                break
        }
        if  (['amount', 'currencyCode','isOnSale','dollarPrice'].includes(field)){
            setBookToEdit((prevBook) => ({...prevBook, listPrice: {...prevBook.listPrice, [field]: value }}))
        }else if (['authors','categories'].includes(field)){
            setBookToEdit((prevBook) => ({...prevBook, [field]: value.split(',')}))

        }else{
            setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
        }
    }




    function loadBook(bookId){
        var newBook=bookService.get(bookId)
        .then(setBookToEdit)
    }

    function onSaveBook(ev){
        ev.preventDefault()
        bookService.save(bookToEdit)
        .then((book)=>{
                navigate(`/book/${book.id}`)
                showSuccessMsg('Book saved')
        })
    }

    console.log("rendered")
    if (!bookToEdit) return <h2>Loading Book..</h2>
    const {title,subtitle,pageCount,description,language,
        publishedDate,thumbnail,authors,categories}  = bookToEdit
    const { listPrice: { amount,currencyCode,isOnSale,dollarPrice } }  = bookToEdit

    return (
        <section className="book-edit">
            <form className="book-edit-form" onSubmit={onSaveBook}>
                
                <h4>Book Details:</h4>
                <div className="book-edit-elementral">


                    <label htmlFor="title">Book Title </label>
                    <input value={title} onChange={handleChange} type="text" name="title" id="title"/>


                    <div className="book-edit-arrays"> 
                        <label htmlFor="authors">Authors (use , to seperate) </label>
                        <textarea value={authors}  rows={1} cols={30} onChange={handleChange} type="text" name="authors" id="authors"/>
                        
                        <label htmlFor="categories">Categories (use , to seperate) </label>
                        <textarea value={categories}  rows={1} cols={30} onChange={handleChange} type="categories" name="categories" id="categories"/>
                     
                    </div>

                    <label htmlFor="subtitle">Sub Title </label>
                    <textarea value={subtitle} onChange={handleChange}   rows={2} cols={40} name="subtitle" id="subtitle"/>

                    <label htmlFor="pageCount">Page Count </label>
                    <input value={pageCount} onChange={handleChange} type="number" name="pageCount" id="pageCount"/>

                    <label htmlFor="publishedDate">Publish Year </label>
                    <input value={publishedDate} onChange={handleChange} type="number" name="publishedDate" id="publishedDate"/>

                    <label htmlFor="language">Language </label>
                    <input value={language} onChange={handleChange} type="text" name="language" id="language"/>

                    <label htmlFor="description">Description </label>
                    <textarea value={description} onChange={handleChange}   rows={5} cols={70} name="description" id="description"/>
                    
                    <label htmlFor="thumbnail">Image Link </label>
                    <input type="url" name="thumbnail" onChange={handleChange} id="thumbnail" value={thumbnail} size="40" />

                </div>

                <h4>Book Sell Details:</h4>
                <div className="book-edit-list-price">
                    <label htmlFor="amount">Price (Local Currency)</label>
                    <input value={amount} onChange={handleChange} type="number" name="amount" id="amount"/>

                    <label htmlFor="currencyCode">Currency</label>
                    <input value={currencyCode} onChange={handleChange} type="text" name="currencyCode" id="currencyCode"/>
                    
                    <label htmlFor="dollarPrice">Price in Dollar $</label>
                    <input value={dollarPrice} onChange={handleChange} type="text" name="dollarPrice" id="dollarPrice"/>

                    <label htmlFor="isOnSale">Book On Sale? </label>
                    <input value={isOnSale} onChange={handleChange} type="checkbox" name="isOnSale" id="isOnSale" checked={isOnSale}/>
                   
                </div>
                <button>Save</button>
                


            </form>
       </section>
    )
}

