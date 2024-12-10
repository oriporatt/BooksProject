export const googleBookService = {
    query,
    importSearchObject,
}

function query(txt){
    const modifiedTxt= txt.replaceAll(" ","%20")
    return fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${modifiedTxt}&maxResults=5&orderBy=relevance`)
        .then(res=>{
            return res.json()
        })

}




function importSearchObject(inObject){

    const resBooks=inObject.items.map((book)=>{


        const authors = book.volumeInfo.authors || [""]
        const categories = book.volumeInfo.categories || [""]
        const publishedDate = book.volumeInfo.publishedDate ? String(new Date(book.volumeInfo.publishedDate).getFullYear()) : ""
        const pageCount = book.volumeInfo.pageCount || ""
        const language = book.volumeInfo.language || ""
        const description = book.volumeInfo.description || ""
        const thumbnail=book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail:""
        return(
            {
                id:book.id,
                title: book.volumeInfo.title,
                subtitle:  book.volumeInfo.subtitle,
                authors: [...authors],
                publishedDate: publishedDate,
                description: description,
                pageCount:pageCount,
                categories:[...categories],
                thumbnail: thumbnail,
                language: language,
                listPrice: {
                    amount: "",
                    currencyCode: "usd",
                    isOnSale: false,
                }
        })
    })
    return resBooks

}



