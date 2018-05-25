import React from 'react'
import './MainContent.css'

function MainContent(props) {

    if (props.userData.id) {

        return <div className="main">
            <h2> {`Login: ${props.userData.login}`}</h2>
            <h2> {`Name and Last: ${props.userData.name}`}</h2>

            <img class="image" src={props.userData.avatar_url} alt="profile pic" />
            <span>
                <h3> {`Location: ${props.userData.location}`}</h3>
                <h3> {`Followers: ${props.userData.followers}`}</h3>
                <h3> {`Following: ${props.userData.following}`}</h3>
            </span>
        </div>
    }
    else if (props.onError) {
        return <ul className="list"><li>{`User not found!`}</li></ul>
    } else {
        return <div> </div>
    }
}




export default MainContent 