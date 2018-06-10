'use strict'

require('dotenv').config()

const { mongoose, models: { User, Event } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL } } = process

describe('logic (buskers)', () => {
    const userData = {
        nombre: 'Alex',
        email: 'alex@mail.com',
        username: 'alexb',
        contraseña: '123',
        confirmaContraseña: '123',
        categoria: 'Country',
        descripcion: 'Mejor música country en Barcelona',

    }

    const otherArtistData = {
        nombre: 'Romina',
        email: 'romina@mail.com',
        contraseña: '345',
        confirmaContraseña: '345',
        categoria: 'Electronic',
        descripcion: 'Mejor música electrónica en Barcelona'
    }

    const dummyUserId = '123456781234567812345678'
    const dummyEventId = '123456781234567812345678'
    const event = 'party'
    const indexes = []

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([User.remove()/*, Note.deleteMany()*/])
    })

    describe('register user', () => {
        it('should succeed on correct data', () =>
            logic.registerUser('Alex', 'alex@mail.com', 'alexb', '123', '123', 'Country', 'Mejor música country en Barcelona')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on already registered user', () =>
            User.create(userData)
                .then(() => {
                    const { nombre, email, username, contraseña, confirmaContraseña, categoria, descripcion } = userData

                    return logic.registerUser(nombre, email, username, contraseña, confirmaContraseña, categoria, descripcion)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`user with email ${userData.email} already exists`)
                })
        )

        it('should fail on no user nombre', () =>
            logic.registerUser()
                .catch(({ message }) => expect(message).to.equal('user nombre is not a string'))
        )

        it('should fail on empty user nombre', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user nombre is empty or blank'))
        )

        it('should fail on blank user nombre', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user nombre is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.registerUser(userData.nombre)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.registerUser(userData.nombre, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.registerUser(userData.nombre, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user username', () =>
            logic.registerUser(userData.nombre, userData.email)
                .catch(({ message }) => expect(message).to.equal('user username is not a string'))
        )

        it('should fail on empty user username', () =>
            logic.registerUser(userData.nombre, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user username is empty or blank'))
        )

        it('should fail on blank user username', () =>
            logic.registerUser(userData.nombre, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user username is empty or blank'))
        )

        it('should fail on no user contraseña', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username)
                .catch(({ message }) => expect(message).to.equal('user contraseña is not a string'))
        )

        it('should fail on empty user contraseña', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, '')
                .catch(({ message }) => expect(message).to.equal('user contraseña is empty or blank'))
        )

        it('should fail on blank user contraseña', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, '     ')
                .catch(({ message }) => expect(message).to.equal('user contraseña is empty or blank'))
        )

        it('should fail on no user confirmaContraseña', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña)
                .catch(({ message }) => expect(message).to.equal('user confirmaContraseña is not a string'))
        )

        it('should fail on empty user confirmaContraseña', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, '')
                .catch(({ message }) => expect(message).to.equal('user confirmaContraseña is empty or blank'))
        )

        it('should fail on blank user confirmaContraseña', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, '     ')
                .catch(({ message }) => expect(message).to.equal('user confirmaContraseña is empty or blank'))
        )

        it('should fail on no user categoria', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, userData.confirmaContraseña)
                .catch(({ message }) => expect(message).to.equal('user categoria is not a string'))
        )

        it('should fail on empty user categoria', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, userData.confirmaContraseña, '')
                .catch(({ message }) => expect(message).to.equal('user categoria is empty or blank'))
        )

        it('should fail on blank user categoria', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, userData.confirmaContraseña, '     ')
                .catch(({ message }) => expect(message).to.equal('user categoria is empty or blank'))
        )

        it('should fail on no user descripcion', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, userData.confirmaContraseña, userData.categoria)
                .catch(({ message }) => expect(message).to.equal('user descripcion is not a string'))
        )

        it('should fail on empty user descripcion', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, userData.confirmaContraseña, userData.categoria, '')
                .catch(({ message }) => expect(message).to.equal('user descripcion is empty or blank'))
        )

        it('should fail on blank user descripcion', () =>
            logic.registerUser(userData.nombre, userData.email, userData.username, userData.contraseña, userData.confirmaContraseña, userData.categoria, '     ')
                .catch(({ message }) => expect(message).to.equal('user descripcion is empty or blank'))
        )

    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    logic.authenticateUser('alex@mail.com', 'alexb','123')
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user email', () =>
            logic.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

            / it('should fail on blank user email', () =>
                logic.authenticateUser('     ')
                    .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
            )

        it('should fail on no user username', () =>
            logic.authenticateUser(userData.email)
                .catch(({ message }) => expect(message).to.equal('user username is not a string'))
        )

        it('should fail on empty user username', () =>
            logic.authenticateUser(userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user username is empty or blank'))
        )

        it('should fail on blank user username', () =>
            logic.authenticateUser(userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user username is empty or blank'))
        )

        it('should fail on no user contraseña', () =>
            logic.authenticateUser(userData.email, userData.username)
                .catch(({ message }) => expect(message).to.equal('wrong credentials'))
        )

        it('should fail on empty user contraseña', () =>
            logic.authenticateUser(userData.email, userData.username, '')
                .catch(({ message }) => expect(message).to.equal('wrong credentials'))
        )

        it('should fail on blank user contraseña', () =>
            logic.authenticateUser(userData.email, userData.username, '     ')
                .catch(({ message }) => expect(message).to.equal('wrong credentials'))
        )
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {

                    return logic.retrieveUser(id)
                })
                .then(user => {
                    expect(user).to.exist
                    const { _id, nombre, email, username, contraseña, confirmaContraseña, categoria, descripcion } = user

                    expect(nombre).to.equal('Alex')
                    expect(email).to.equal('alex@mail.com')
                    expect(username).to.equal('alexb')
                    expect(categoria).to.equal('Country')
                    expect(descripcion).to.equal('Mejor música country en Barcelona')
                    

                    expect(_id).to.be.undefined
                    expect(contraseña).to.be.undefined
                    expect(confirmaContraseña).to.be.undefined
                })
        )

        it('should fail on no user id', () =>
            logic.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })

    /*describe('udpate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.updateArtist(id, 'Romina', 'alex@mail.com', '123', 'romina@mail.com', '345')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.exist

                            const { nombre, email, contraseña } = user

                            expect(user.id).to.equal(id)                         
                           

                            expect(email).to.equal('romina@mail.com')
                            expect(contraseña).to.equal('345')
                        })
                })
        )

        it('should fail on changing email to an already existing user\'s email', () =>
            Promise.all([
                User.create(userData),
                User.create(otherArtistData)
            ])
                .then(([{ id: id1 }, { id: id2 }]) => {
                    const { nombre, email, contraseña } = userData

                    return logic.updateArtist(id1, nombre, email, contraseña, otherArtistData.email)
                })
                .catch(({ message }) => expect(message).to.equal(`user with email ${otherArtistData.email} already exists`))
        )

        it('should fail on no user id', () =>
            logic.updateArtist()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.updateArtist('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.updateArtist('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user nombre', () =>
            logic.updateArtist(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user nombre is not a string'))
        )

        it('should fail on empty user nombre', () =>
            logic.updateArtist(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user nombre is empty or blank'))
        )

        it('should fail on blank user nombre', () =>
            logic.updateArtist(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user nombre is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.updateArtist(dummyUserId, userData.nombre)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.updateArtist(dummyUserId, userData.nombre, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.updateArtist(dummyUserId, userData.nombre, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user contraseña', () =>
            logic.updateArtist(dummyUserId, userData.nombre, userData.email)
                .catch(({ message }) => expect(message).to.equal('user contraseña is not a string'))
        )

        it('should fail on empty user contraseña', () =>
            logic.updateArtist(dummyUserId, userData.nombre, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user contraseña is empty or blank'))
        )

        it('should fail on blank user contraseña', () =>
            logic.updateArtist(dummyUserId, userData.nombre, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user contraseña is empty or blank'))
        )
    })

    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.unregisterArtist(id, 'alex@mail.com', '123')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.be.null
                        })
                })
        )

        it('should fail on no user id', () =>
            logic.unregisterArtist()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.unregisterArtist('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.unregisterArtist('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.unregisterArtist(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.unregisterArtist(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.unregisterArtist(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user contraseña', () =>
            logic.unregisterArtist(dummyUserId, userData.email)
                .catch(({ message }) => expect(message).to.equal('user contraseña is not a string'))
        )

        it('should fail on empty user contraseña', () =>
            logic.unregisterArtist(dummyUserId, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user contraseña is empty or blank'))
        )

        it('should fail on blank user contraseña', () =>
            logic.unregisterArtist(dummyUserId, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user contraseña is empty or blank'))
        )
    })  

 */
    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})