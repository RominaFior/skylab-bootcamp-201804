import React from 'react'

function MainContent(props) {
    let err=props.error
    let parsedInfo=[]
    for (var val in props.onInfo) {
        parsedInfo.push(props.onInfo[val])
    }
    parsedInfo=parsedInfo.map(v=> <li key={Math.random()}>{v}</li>)
    parsedInfo=parsedInfo.slice(16)
    if (err) {
        return <ul><li>{props.onInfo}</li></ul>
    }else{
        return <ul>{parsedInfo}</ul>
    }
    
}

export default MainContent