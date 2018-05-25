import React from 'react'
import './SearchForm.css'

function SearchForm(props) {
    return <section>
    <form onSubmit={props.onHandlerUsers}>
        <input type="text" onChange={props.onHandlerSearch} className='textField' value={props.searchValue}/>
        <button type="submit" className='butSearch'>Search</button>
    </form>
    </section>
}

export default SearchForm