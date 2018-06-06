'use strict'

const axios = require('axios')

const notesApi = {
    url: 'hhh',

    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    registerUser(name, surname, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return axios.post(`${this.url}/users`, { name, surname, email, password })
                    //.then(({ status, data }) => status === 201 && data.status === 'OK')
                    .then(({ status, data }) => {
                        if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    },

    /**
     * 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
    authenticateUser(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return axios.post(`${this.url}/auth`, { email, password })
                    //.then(({ data: { data: { id } } }) => id)
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data.id
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    },

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<User>} 
     */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return axios.get(`${this.url}/users/${id}`)
                    //.then(({ data: { data: user } }) => user)
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    },
    /**
     *@param {string} id 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
    updateUser(id, name, surname, email, password, newEmail, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return axios.patch(`${this.url}/users/${id}`, { id, name, surname, email, password, newEmail, newPassword })
                    .then(({ status, data }) => {

                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })



        /*  if (!user) throw Error('wrong credentials')

         if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

         if (newEmail) {
             return User.findOne({ email: newEmail })
                 .then(_user => {
                     if (_user && _user.id !== id) throw Error(`user with email ${newEmail} already exists`)

                     return user
                 })
         }

         return user
     })
     .then(user => {
         user.name = name
         user.surname = surname
         user.email = newEmail ? newEmail : email
         user.password = newPassword ? newPassword : password

         return user.save()
     })
     .then(() => true) */
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return axios.delete(`${this.url}/users/${id}`, { email, password })
            })
            .then(({ status, data }) => {

                if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                return true
            })
            .catch(({ response: { data: { error } } }) => error)
    },

    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @returns {Promise<string>}
     */
    addNote(userId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if ((text = text.trim()).length === 0) throw Error('text is empty or blank')


                return axios.post(`${this.url}/users/${userId}/notes`, { userId, text })
                    .then(({ status, data }) => {

                        if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data.id
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    },

    /**
     * 
     * @param {string} userId
     * @param {string} noteId 
     * 
     * @returns {Promise<Note>}
     */
    retrieveNote(userId, noteId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof noteId !== 'string') throw Error('note id is not a string')

                if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')


                return axios.get(`${this.url}/users/${userId}/notes/${noteId}`, { userId, noteId })
                    .then(({ status, data }) => {

                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    },

    /**
     * @param {string} userId
     * 
     * @returns {Promise<[Note]>}
     */
    listNotes(userId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                return axios.get(`${this.url}/users/${userId}/notes`)
                    .then(({ status, data }) => {

                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    },

    /**
    * 
    * @param {string} userId
    * @param {string} noteId 
    *
    * @returns {Promise<boolean>}
    */
    removeNote(userId, noteId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof noteId !== 'string') throw Error('note id is not a string')

                if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

                return axios.delete(`${this.url}/users/${userId}/notes/${noteId}`, { userId, noteId })
                    .then(({ status, data }) => {

                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    },

    /**
     * 
     * @param {string} userId
     * @param {string} noteId 
     * @param {string} text 
     * 
     * @returns {Promise<boolean>}
     */
    updateNote(userId, noteId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof noteId !== 'string') throw Error('note id is not a string')

                if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

                return axios.patch(`${this.url}/users/${userId}/notes/${noteId}`, { userId, noteId, text })
                .then(({ status, data }) => {

                    if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                    return true
                })
                .catch(({ response: { data: { error } } }) => error)
        })
    },
            
    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @returns {Promise<[Note]>}
     */
    findNotes(userId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if (!text.length) throw Error('text is empty')

                return axios.get(`${this.url}/users/${userId}/notes/${noteId}`)
                    .then(({ status, data }) => {

                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(({ response: { data: { error } } }) => error)
            })
    }
    

}

module.exports = notesApi