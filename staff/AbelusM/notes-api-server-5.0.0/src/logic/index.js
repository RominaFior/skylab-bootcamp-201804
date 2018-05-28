'use strict'

const { User, Note } = require('../models')

const logic = {
    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<Boolean>}
     */
    register(name, surname, email, password) {
        return Promise.resolve()
            .then(res => {
                const { name, surname, email, password} = res
                // TODO validations (name, surname, email, password)
                if (typeof res !== 'string') throw Error(`${res} is not a string`)

                if (!(res = res.trim()).length) throw Error(`${res} is empty or blank`)

                if (typeof text !== 'string') throw Error('text is not a string')

                if ((res = res.trim()).length === 0) throw Error(`${res} is empty or blank`)

                return User.create({ name, surname, email, password })
                    .then(() => true)
            })
    },

    login(email, password) {
        return Promise.resolve()
            .then(() => {
                // TODO validations

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user.id
            })
    },

    retrieve(id) {
        // TODO
        return Promise.resolve()
            .then(() => {
                // TODO validations

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return (user.name, user.surname, user.email)
            })
    },

    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @throws
     */
    addNote(userId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('userId is not a string')

                if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

                const note = new Note(userId, text)

                return this._notes.insertOne(note)
                    .then(() => note._id.toString())
            })
    },

    /**
     * 
     * @param {string} userId
     * @param {string} id 
     * 
     * @throws
     */
    retrieveNote(userId, id) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('userId is not a string')

                if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

                if (typeof id !== 'string') throw Error('id is not a string')

                if (!(id = id.trim())) throw Error('id is empty or blank')

                return this._notes.findOne({ _id: ObjectId(id), userId })
                    .then(note => {
                        if (!note) throw Error(`note with id ${id} does not exist for userId ${userId}`)

                        return { id: note._id.toString(), userId: note.userId, text: note.text }
                    })
            })
    },

    /**
     * @param {string} userId
     * 
     * @throws
     */
    listNotes(userId) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('userId is not a string')

                if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

                return this._notes.find({ userId }).toArray()
                    .then(notes => notes.map(({ _id, userId, text }) => ({ id: _id.toString(), userId, text })))
            })
    },

    /**
     * 
     * @param {string} userId
     * @param {string} id 
     *
     * @throws
     */
    removeNote(userId, id) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('userId is not a string')

                if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

                if (typeof id !== 'string') throw Error('id is not a string')

                if (!(id = id.trim())) throw Error('id is empty or blank')

                return this._notes.findOneAndDelete({ _id: ObjectId(id), userId })
                    .then(res => {
                        if (!res.value) throw Error(`note with id ${id} does not exist for userId ${userId}`)
                    })
            })
    },

    /**
     * 
     * @param {string} userId
     * @param {string} id 
     * @param {string} text 
     * 
     * @throws
     */
    updateNote(userId, id, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('userId is not a string')

                if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

                if (typeof id !== 'string') throw Error('id is not a string')

                if (!(id = id.trim())) throw Error('id is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

                return this._notes.findOneAndUpdate({ _id: ObjectId(id), userId }, { $set: { text } })
                    .then(res => {
                        if (!res.value) throw Error(`note with id ${id} does not exist for userId ${userId}`)
                    })
            })
    },

    /**
     * 
     * @param {string} userId
     * @param {string} text 
     * 
     * @throws
     */
    findNotes(userId, text) {
        return Promise.resolve()
            .then(() => {
                if (typeof userId !== 'string') throw Error('userId is not a string')

                if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

                if (typeof text !== 'string') throw Error('text is not a string')

                if (!text.length) throw Error('text is empty')

                return this._notes.find({ userId, text: { $regex: text } }).toArray()
                    .then(notes => notes.map(({ _id, userId, text }) => ({ id: _id.toString(), userId, text })))
            })
    }
}

module.exports = logic