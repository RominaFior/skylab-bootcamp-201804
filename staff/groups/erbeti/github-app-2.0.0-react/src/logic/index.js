'use strict'

const logic = {
    url: 'https://api.github.com',

    token: '7f9720a06c145aaf9b856b224b92a5babcb88314' ,

    headers() {
        return { headers: { Authorization: `Bearer ${this.token}`}}
    },

    searchUsers(query) {
        return fetch(`${this.url}/search/users?q=${query}`, this.headers())
            .then(resp => resp.json())
            .then(data => data.items)
            
    },

    retrieveUser(username) {
        return fetch(`${this.url}/users/${username}`, this.headers())
            .then(resp => resp.json())
            
    }
}

export default logic