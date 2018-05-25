import React from 'react'
import './UsersList.css'

function UsersList(props) {
    return <section>
        <h3 className='title'>User List</h3>
        {props.users.length > 0 && props.users.map(user => {
            return <ul><li key={user.id}>
                <img src={user.avatar_url} onClick={() => props.onRetrieverUser(user.login)} />
                <figcaption>{user.login}</figcaption>
            </li>
            </ul>
        })}
    </section>
}

export default UsersList