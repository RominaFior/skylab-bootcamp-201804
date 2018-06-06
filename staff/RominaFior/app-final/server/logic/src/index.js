'use strict'

const { models: { Artist, Event } } = require('data')

const logic = {
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


                return Artist.findOne({ email })
                    .then(artist => {
                        if (artist) throw Error(`artist with email ${email} already exists`)

                        return Artist.create({ name, email, password, description, genre, bankAccount, votes, image })
                            .then(() => true)
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

                return Artist.findOne({ email, password })
            })
            .then(artist => {
                if (!artist) throw Error('wrong credentials')

                return artist.id
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

                return Artist.findById(id).select({_id:0, name:1, email:1, description:1, genre:1, bankAccount:1, votes:1, image:1 })
            })
            .then(artist => {
                if (!artist) throw Error(`no artist found with id ${id}`)

                return artist
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

                return Artist.findOne({ email, password })
            })
            .then(artist => {
                if (!artist) throw Error('wrong credentials')

                if (artist.id !== id) throw Error(`no artist found with id ${id} for given credentials`)

                if (newEmail) {
                    return Artist.findOne({ email: newEmail })
                        .then(_artist => {
                            if (_artist && _artist.id !== id) throw Error(`artist with email ${newEmail} already exists`)

                            return artist
                        })
                }

                return artist
            })
            .then(artist => {
                artist.name = name                
                artist.email = newEmail ? newEmail : email
                artist.password = newPassword ? newPassword : password

                return artist.save()
            })
            .then(() => true)
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

                return Artist.findOne({ email, password })
            })
            .then(artist => {
                if (!artist) throw Error('wrong credentials')

                if (artist.id !== id) throw Error(`no artist found with id ${id} for given credentials`)

                return artist.remove()
            })
            .then(() => true)
    },
}

module.exports = logic 