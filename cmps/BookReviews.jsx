
export function BookReviews({reviews, OnDeleteReview}) {


    

    if (!reviews) return <p>No reviews..</p>
    
    return (
        
        <section className="book-reviews">

            {reviews.map((review)=>{
                        return (
                            <ul key={review.id}>
                                <li>{review.reviewDate} {review.fullName} ({review.rating})<button onClick={()=>OnDeleteReview(review.id)}>X</button></li>
                                
                            </ul>
                        )
                    })
            }
        </section>

    )
}
