

export function BookFilter() {


    return (
        <section className="book-preview">
            <h2>Filter our Books</h2>
            <form>
                <label htmlFor="bookName">Book Title </label>
                <input type="text" name="bookName" id="bookName"/>
                <br></br>
                <label htmlFor="maxPrice">Max Price </label>
                <input type="number" name="maxPrice" id="maxPrice"/>
            </form>
        </section>
    )
}

