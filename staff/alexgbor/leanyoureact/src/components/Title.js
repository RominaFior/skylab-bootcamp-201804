import React from 'react'

function Title(props) {
    return <h1 className="App-title">You searched: {props.onInfo.name}</h1>
}

export default Title