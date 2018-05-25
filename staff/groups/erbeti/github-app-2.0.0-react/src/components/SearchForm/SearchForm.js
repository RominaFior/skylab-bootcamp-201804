import React from "react";

function SearchForm (props) {
    return (
        <form onSubmit={props.handlerSearch}>
            <input type="text" placeholder= "users" className="inputForm" onChange={props.handlerUser} value= {props.username}/>
            <button type="submit" className="buttonForm">Search!</button>
        </form>
    );
}

export default SearchForm;