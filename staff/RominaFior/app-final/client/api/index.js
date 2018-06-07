'use strict'

const axios = require('axios')

const buskersApi = {

    url: 'NO-URL',

    token: 'NO-TOKEN',

    /**
     * 
     * @param {string} name 
     * @param {string} email 
     * @param {string} password
     * @param {string} description 
     * @param {string} genre
     * @param {string} bankAccount
     * @param {number} votes
     * @param {string} image 
     * 
     * @returns {Promise<boolean>}
     */
    registerArtist(name, email, password, description, genre, bankAccount, votes, image) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('artist name is not a string')

                if (!(name = name.trim()).length) throw Error('artist name is empty or blank')

                if (typeof email !== 'string') throw Error('artist email is not a string')

                if ((email = email.trim()).length === 0) throw Error('artist email is empty or blank')

                if (typeof password !== 'string') throw Error('artist password is not a string')

                if (!(password = password.trim()).length) throw Error('artist password is empty or blank')

                if (typeof description !== 'string') throw Error('artist description is not a string')

                if ((description = description.trim()).length === 0) throw Error('artist description is empty or blank')

                if (typeof genre !== 'string') throw Error('artist genre is not a string')

                if ((genre = genre.trim()).length === 0) throw Error('artist genre is empty or blank')

                if (typeof bankAccount !== 'string') throw Error('artist bankAccount is not a string')

                if ((bankAccount = bankAccount.trim()).length === 0) throw Error('artist bankAccount is empty or blank')

                if (typeof votes !== 'number') throw Error('artist votes is not a number')

                /* if ((votes = votes.trim()).length === 0) throw Error('artist votes is empty or blank') */

                if (typeof image !== 'string') throw Error('artist image is not a string')

                if ((image = image.trim()).length === 0) throw Error('artist image is empty or blank')


                return axios.post(`${this.url}/users`, { name, email, password, description, genre, bankAccount, votes, image })
                    .then(({ status, data }) => {
                        if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },

    /**
* 
* @param {string} email 
* @param {string} password 
* 
* @returns {Promise<string>}
*/
    authenticateArtist(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('artist email is not a string')

                if (!(email = email.trim()).length) throw Error('artist email is empty or blank')

                if (typeof password !== 'string') throw Error('artist password is not a string')

                if ((password = password.trim()).length === 0) throw Error('artist password is empty or blank')

                return axios.post(`${this.url}/auth`, { email, password })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        const { data: { id, token } } = data

                        this.token = token

                        return id
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },


    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<Artist>} 
     */
    retrieveArtist(id) {
        return Promise.resolve()
            .then(() => {

                if (typeof id !== 'string') throw Error('artist id is not a string')

                if (!(id = id.trim()).length) throw Error('artist id is empty or blank')

                return axios.get(`${this.url}/artist/${id}`, { headers: { authorization: `Bearer ${this.token}` } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },

    /**
    * 
    * @param {string} id 
    * @param {string} name      
    * @param {string} email 
    * @param {string} password 
    * @param {string} newEmail 
    * @param {string} newPassword 
    * 
    * @returns {Promise<boolean>}
    */
    updateArtist(id, name, email, password, newEmail, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('artist id is not a string')

                if (!(id = id.trim()).length) throw Error('artist id is empty or blank')

                if (typeof name !== 'string') throw Error('artist name is not a string')

                if (!(name = name.trim()).length) throw Error('artist name is empty or blank')

                if (typeof email !== 'string') throw Error('artist email is not a string')

                if (!(email = email.trim()).length) throw Error('artist email is empty or blank')

                if (typeof password !== 'string') throw Error('artist password is not a string')

                if ((password = password.trim()).length === 0) throw Error('artist password is empty or blank')

                return axios.patch(`${this.url}/artist/${id}`, { name, email, password, newEmail, newPassword }, { headers: { authorization: `Bearer ${this.token}` } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },


    /**
  * 
  * @param {string} id 
  * @param {string} email 
  * @param {string} password 
  * 
  * @returns {Promise<boolean>}
  */
    unregisterArtist(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('artist id is not a string')

                if (!(id = id.trim()).length) throw Error('artist id is empty or blank')

                if (typeof email !== 'string') throw Error('artist email is not a string')

                if (!(email = email.trim()).length) throw Error('artist email is empty or blank')

                if (typeof password !== 'string') throw Error('artist password is not a string')

                if ((password = password.trim()).length === 0) throw Error('artist password is empty or blank')

                return axios.delete(`${this.url}/artist/${id}`, { headers: { authorization: `Bearer ${this.token}` }, data: { email, password } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },

    listCategories() {
        return Promise.resolve()
            .then(() => {

                return axios.get(`${this.url}/categories`)
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })

            })
    },

}

module.exports = buskersApi