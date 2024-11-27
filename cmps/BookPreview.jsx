

export function BookPreview({ book }) {



    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h4> Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <h5> Price $: {book.listPrice.dollarPrice}</h5>

            <img src={`./assets/img/${book.thumbnail}`} alt="book-image" />
        </article>
    )
}

