import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,

}

// For Debug (easy access from console):
// window.cs = carService

function query(filterBy = {}) {
    
    return storageService.query(BOOK_KEY)
        .then(books => {
            // if (filterBy.txt) {
            //     const regExp = new RegExp(filterBy.txt, 'i')
            //     books = books.filter(book => regExp.test(book.vendor))
            // }
            // if (filterBy.minSpeed) {
            //     cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)
            // }
            return _addDollarPrice(books)
            .then(books=> {
                return books
            })
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

// function getEmptyCar(vendor = '', maxSpeed = '') {
//     return { vendor, maxSpeed }
// }

// function getDefaultFilter(filterBy = { txt: '', minSpeed: 0 }) {
//     return { txt: filterBy.txt, minSpeed: filterBy.minSpeed }
// }



function _createCar(vendor, maxSpeed = 250) {
    const car = getEmptyCar(vendor, maxSpeed)
    car.id = utilService.makeId()
    return car
}

export function _addDollarPrice(books){
    return utilService.getExchange().then(
        data=>{
            return books.map(book=>{
                const exchangeRate = data[book.listPrice.currencyCode.toLowerCase()]
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
   
    if (!books || !books.length) {
        const initBookArray=utilService.getBooksJsonArray()
        books = []

        initBookArray.forEach(newBook=>books.push(newBook))

        utilService.saveToStorage(BOOK_KEY, books)
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