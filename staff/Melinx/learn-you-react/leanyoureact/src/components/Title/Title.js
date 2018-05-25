import React from 'react'
import './Title.css'

function Title(props) {
    
    if(props.userData.login)
    return <h1 className="searchMessage" >{`You searched for: ${props.userData.login}`}</h1>
    else return <h1 className="title">[Here goes the title]</h1> 
}

export default Title
