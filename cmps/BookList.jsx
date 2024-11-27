import { BookPreview } from "./BookPreview.jsx";

const { Link } = ReactRouterDOM
export function BookList({ books }) {
    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button > Remove</button>
                        <button><Link to={`/book/${book.id}`}>Details</Link></button>
                        {/* <button ><Link to={`/car/edit/${car.id}`}>Edit</Link></button> */}
                    </section>
                </li>
            )}
        </ul>
    )

}