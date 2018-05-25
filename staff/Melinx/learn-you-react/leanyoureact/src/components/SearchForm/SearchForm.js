import React from 'react'
import './SearchForm.css'


function SeachForm (props){
    return <form className="form" onSubmit={props.searchUser}>

    <input className="searchBar" type="text" onChange={props.catchUser} placeholder="type a username.."/> 
    <input className="button" type="submit" value="Search for me slave"/>

    </form>
}

export default SeachForm;