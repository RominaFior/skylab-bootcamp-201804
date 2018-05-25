import React from 'react'

function SearchForm(props) {
    return <form onSubmit={e=>{
        e.preventDefault()
        props.onHandlerUser()
    }}><input className='form-control text-center' type="text" placeholder='your github name' onChange={props.handlerWrite}/><button className='btn btn-primary'>Search for me,slave!</button></form>
}

export default SearchForm