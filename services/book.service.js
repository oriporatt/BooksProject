import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'


export const bookService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getEmptyBook,
    addReview,
    removeReview,
    addGoogleBook,
    filterFromSearchParams,
}

// For Debug (easy access from console):
// window.cs = carService

function query(filterBy = {}) {
    
    return storageService.query(BOOK_KEY)
        .then(books=>{
            if (books.length===0){
                return _createBooks()
            }else{
                return(books)
            }
        }) 
        .then(books => {
            return (_addDollarPrice(books))
        })
        .then(books=>{
            if (filterBy.bookName) {
                const regExp = new RegExp(filterBy.bookName, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.maxPrice) {
                
                books = books.filter(book =>book.listPrice.dollarPrice <= filterBy.maxPrice)
            }
            return books
        })

}


function get(bookID) {
    return storageService.get(BOOK_KEY, bookID)
        .then(book=> {
            return _addDollarPrice([book])
            .then(books=>{
                return(books[0])
             })
             .then(_setNextPrevBookId)
        })
}


function remove(bookID) {
    return storageService.remove(BOOK_KEY, bookID)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook() {
   return { authors:[],
            categories:[],
            description:'',
            language:'',
            listPrice:{
                amount:'',
                currencyCode:'',
                dollarPrice:'',
                isOnSale:''
            },
            pageCount:'',
            publishedDate:'',
            subtitle:'',
            thumbnail:'',
            title:'',
         }
 }

function getDefaultFilter() {
     return { bookName: '', maxPrice: '' }
 }
 
function addReview(bookId,review){
    return get(bookId)
    .then(oldBook=>{
        const newReview ={id: utilService.makeId(),...review}

        const newBook=
        {...oldBook,
            reviews:  [...oldBook.reviews||[],newReview]
        }
        
        return save(newBook)
        
    })
    
    
}



function removeReview(bookId,reviewId){
    return get(bookId)
    .then(oldBook=>{
        const newReview =oldBook.reviews.filter(review=>review.id!==reviewId)

        const newBook=
        {...oldBook,
            reviews: newReview
        }
        
        return save(newBook)
        
    })
    
    
}

function _createCar(vendor, maxSpeed = 250) {
    const car = getEmptyCar(vendor, maxSpeed)
    car.id = utilService.makeId()
    return car
}

export function _addDollarPrice(books){
    return utilService.getExchange().then(
        data=>{
            return books.map(book=>{
                let exchangeRate = '';
                try{
                     exchangeRate = data[book.listPrice.currencyCode.toLowerCase()]
                }
                catch(error){
                     exchangeRate=""
                }
                return {
                    ...book,
                    listPrice: {
                        ...book.listPrice,
                        dollarPrice:exchangeRate? 
                        ((Math.round(book.listPrice.amount/exchangeRate*100)/100))
                        :0
                    }

                }
            })
        }
        )
}


function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
   
    if (!books || !books.length || books.length===0) {
        const initBookArray=utilService.getBooksJsonArray()
        books = []

        initBookArray.forEach(newBook=>books.push(newBook))

        utilService.saveToStorage(BOOK_KEY, books)
        return Promise.resolve(books)

    }

}



function _setNextPrevBookId(book) {
    return query().then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
        const prevBook = books[bookIdx - 1] ? books[bookIdx - 1] : books[books.length - 1]
        book.nextBookId = nextBook.id
        book.prevBookId = prevBook.id
        return book
    })
}

function addGoogleBook(newItem) {
    return query().then(books=>{
        if (books.some(book=>book.id===newItem.id)){
            return
        }else{
            var emptyBook= getEmptyBook()
            const combineItem={...emptyBook,...newItem}
            return storageService.postBookWithId(BOOK_KEY, combineItem)
        }
    })
}

function filterFromSearchParams(searchParams){
    const bookName=searchParams.get('bookName') || ''
    const maxPrice=searchParams.get('maxPrice') || ''
    return {
        bookName: bookName,
        maxPrice:maxPrice
    }
}