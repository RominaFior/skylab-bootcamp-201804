import React from 'react'
import './Form.css'

function Form(props){

 return <form onSubmit={props.onListUsers} >
    <input onChange={props.onHandlerText}  type="text" placeholder="Search for a user here" value={props.onState.inputText} />
    <input type="submit" />

</form>

}

export default Form
