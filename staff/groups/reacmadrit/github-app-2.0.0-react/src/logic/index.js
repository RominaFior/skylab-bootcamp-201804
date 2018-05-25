const logic = {
    url: 'https://api.github.com',
    token: 'df022ce878b22293358fe726558cc9275f231540',

    headers() {
        return { headers: { Authorization: `Bearer ${this.token}` } }
    },

    searchUsers(query) {
        return fetch(`${this.url}/search/users?q=${query}&per_page=5`, this.headers())
            .then(resp => resp.json())
            .then(data => data.items)
            .catch(err => err.message)
    },

    retrieveUser(username) {
        return fetch(`${this.url}/users/${username}`, this.headers())
            .then(resp => resp.json())
            .catch(err => err.message)
    }
}

export default logic