import React from "react";

function SearchForm (props) {
    return (
        <form onSubmit={props.handlerSearchUser}>
            <input type="text" placeholder= "your github name" className="inputForm" onChange={props.handlerWriteName}/>
            <button type="submit" className="buttonForm">Search for me, slave!</button>
        </form>
    );
}

export default SearchForm;