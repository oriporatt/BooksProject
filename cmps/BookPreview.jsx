

export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <div className="book-preview-data">
                <h2>{book.title}</h2>
                <h4> Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
                <h5> Price $: {book.listPrice.dollarPrice}</h5>
            </div>
            <img src={book.thumbnail} alt="book-image" />
        </article>
    )
}

