'use strict'

const axios = require('axios')

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
    registerArtist(name,email, password, description, genre, bankAccount, votes, image) {
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


                // TODO call api through axios
            })
        }}

 module.exports = logic