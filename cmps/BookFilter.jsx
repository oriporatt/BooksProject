
const { useState, useEffect ,useRef} = React
import { debounce } from "../services/util.service.js"


export function BookFilter({defaultFilter,onSetFilter}) {

    const [filterByToEdit,setFilterByToEdit] =  useState(defaultFilter)
    const onSetFilterDebounce = useRef(debounce(onSetFilter)).current

    useEffect(()=>{
        onSetFilter(onSetFilterDebounce(filterByToEdit))
        },[filterByToEdit]
    )


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
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    const {bookName,maxPrice}=filterByToEdit

    return (
        <section className="book-preview">
            <h2>Filter our Books</h2>
            <form>
                <label htmlFor="bookName">Book Title </label>
                <input value={bookName} onChange={handleChange} type="text" name="bookName" id="bookName"/>
                <br></br>
                <label htmlFor="maxPrice">Max Price </label>
                <input value={maxPrice} onChange={handleChange} type="number" name="maxPrice" id="maxPrice"/>
            </form>
        </section>
    )
}

