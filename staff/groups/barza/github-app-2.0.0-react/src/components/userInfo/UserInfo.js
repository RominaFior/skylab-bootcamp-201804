import React from 'react'
import './UserInfo.css'

function UserInfo(props) {
    return <section className='userInfo'>
      <h3 className='titleInfo'>User info</h3>
      <img src={props.user.avatar_url} className='userImg'/>
      <p><b>Username: </b>{props.user.login}</p>
      <p><b>Followers: </b>{props.user.followers}</p>
      <p><b>Following: </b>{props.user.following}</p>
      <p><b>Location: </b>{props.user.location}</p>
    </section>


}

export default UserInfo