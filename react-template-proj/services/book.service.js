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

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
   
    if (!books || !books.length) {
        books = []

        books.push(
            {
                "id": "ABC789101",
                "title": "To Kill a Mockingbird",
                "description": "A classic novel by Harper Lee that explores the themes of racial injustice and moral growth in the American South.",
                "thumbnail": "d01.jpg",
                "listPrice": {
                    "amount": 200,
                    "currencyCode": "USD",
                    "isOnSale": false
                }
            }
        );

        
        books.push(
            {
                "id": "XYZ123456",
                "title": "The little prince",
                "description": " novella written and illustrated by French writer and military pilot Antoine de Saint-Exupéry",
                "thumbnail": "d02.jpg",
                "listPrice": {
                "amount": 120,
                "currencyCode": "ILS",
                "isOnSale": true
                }
            })

            books.push({
                "id": "ABC987654",
                "title": "1984",
                "description": "A dystopian social science fiction novel and cautionary tale, written by George Orwell.",
                "thumbnail": "d03.jpg",
                "listPrice": {
                    "amount": 120,
                    "currencyCode": "GBP",
                    "isOnSale": false
                }
            })


        utilService.saveToStorage(BOOK_KEY, books)
    }
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
