import { BookPreview } from "./BookPreview.jsx";



const { Link } = ReactRouterDOM
export function BookList({ books, removeBook }) {
    
    async function sendWA(bookID) {
        const webhookUrl = "https://oriporatt.pythonanywhere.com/send_test_message";

        const payload = {
            bookId: bookID,
        };

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log("Message sent successfully:", result);
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    }

    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section className="book-list-buttons">
                        <button onClick={()=>removeBook(book.id)} > Remove</button>
                        <button ><Link to={`/book/${book.id}`}>Details</Link></button>
                        <button ><Link to={`/book/edit/${book.id}`}>Edit</Link></button>
                        <button onClick={()=>sendWA(book.id)}>Send WA message</button>
                    </section>
                </li>
            )}
        </ul>
    )

}
