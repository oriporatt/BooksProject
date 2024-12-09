
const { useState } = React


export function AddReview({bookId,OnSubmitReview  }) {
    const [review,onSetReview]=useState({})
    
    function onAddReview(event){
        event.preventDefault()
        OnSubmitReview(bookId,review)
        event.target.reset()
    }


    function handleChange({ target }) {
        let { value, name: field } = target
        switch (target.type) {
            case 'range':
            case 'number':
                value = +target.value
                break
            case 'checkbox':
                value = target.checked
                break
        }
        onSetReview((prevReview) => ({ ...prevReview, [field]: value }))
    }
    
    return (
        <section className="add-review">
            <h4>Add Book Review</h4>
            <form className="add-review-form" onSubmit={onAddReview}>
                <label htmlFor="fullName">Name </label>
                <input  onChange={handleChange} type="text" name="fullName" id="fullName"/>
                
                <label htmlFor="rating" >Rating </label>
                <select name="rating" id="rating" onChange={handleChange}>
                    <option value="">Select a rating</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </select>

                <label htmlFor="reviewDate">Read At </label>
                <input type="date" name="reviewDate" id="reviewDate" onChange={handleChange}/>
                <button> Add Review</button>
            </form>
        </section>
    )
}

