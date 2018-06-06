'use strict'

require('dotenv').config()

const { mongoose, models: { Artist, Event } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL } } = process

describe('logic (buskers)', () => {
    const artistData = {
        name: 'Alex',
        email: 'alex@mail.com',
        password: '123',
        description: 'Best coutry music in Barcelona',
        genre: 'Country',
        bankAccount: 'E34-2452-24352',
        votes: 234,
        image: 'image'
    }

    const otherArtistData = {
        name: 'Romina',
        email: 'romina@mail.com',
        password: '345',
        description: 'Best electronic music in Barcelona',
        genre: 'Electronic',
        bankAccount: 'E34-5352-24352',
        votes: 129,
        image: 'image1'
    }

    const dummyArtistId = '123456781234567812345678'
    const dummyEventId = '123456781234567812345678'
    const event = 'party'
    const indexes = []

    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([Artist.remove()/*, Note.deleteMany()*/])
    })

    describe('register artist', () => {
        it('should succeed on correct data', () =>
            logic.registerArtist('Alex', 'alex@mail.com', '123', 'Best coutry music in Barcelona', 'Country', 'E34-2452-24352', 234, 'image')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on already registered artist', () =>
            Artist.create(artistData)
                .then(() => {
                    const { name, email, password, description, genre, bankAccount, votes, image } = artistData

                    return logic.registerArtist(name, email, password, description, genre, bankAccount, votes, image)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`artist with email ${artistData.email} already exists`)
                })
        )

        it('should fail on no artist name', () =>
            logic.registerArtist()
                .catch(({ message }) => expect(message).to.equal('artist name is not a string'))
        )

        it('should fail on empty artist name', () =>
            logic.registerArtist('')
                .catch(({ message }) => expect(message).to.equal('artist name is empty or blank'))
        )

        it('should fail on blank artist name', () =>
            logic.registerArtist('     ')
                .catch(({ message }) => expect(message).to.equal('artist name is empty or blank'))
        )

        it('should fail on no artist email', () =>
            logic.registerArtist(artistData.name)
                .catch(({ message }) => expect(message).to.equal('artist email is not a string'))
        )

        it('should fail on empty artist email', () =>
            logic.registerArtist(artistData.name, '')
                .catch(({ message }) => expect(message).to.equal('artist email is empty or blank'))
        )

        it('should fail on blank artist email', () =>
            logic.registerArtist(artistData.name, '     ')
                .catch(({ message }) => expect(message).to.equal('artist email is empty or blank'))
        )

        it('should fail on no artist password', () =>
            logic.registerArtist(artistData.name, artistData.email)
                .catch(({ message }) => expect(message).to.equal('artist password is not a string'))
        )

        it('should fail on empty artist password', () =>
            logic.registerArtist(artistData.name, artistData.email, '')
                .catch(({ message }) => expect(message).to.equal('artist password is empty or blank'))
        )

        it('should fail on blank artist password', () =>
            logic.registerArtist(artistData.name, artistData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('artist password is empty or blank'))
        )

        it('should fail on no artist description', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password)
                .catch(({ message }) => expect(message).to.equal('artist description is not a string'))
        )

        it('should fail on empty artist description', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, '')
                .catch(({ message }) => expect(message).to.equal('artist description is empty or blank'))
        )

        it('should fail on blank artist description', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, '     ')
                .catch(({ message }) => expect(message).to.equal('artist description is empty or blank'))
        )

        it('should fail on no artist genre', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description)
                .catch(({ message }) => expect(message).to.equal('artist genre is not a string'))
        )

        it('should fail on empty artist genre', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, '')
                .catch(({ message }) => expect(message).to.equal('artist genre is empty or blank'))
        )

        it('should fail on blank artist genre', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, '     ')
                .catch(({ message }) => expect(message).to.equal('artist genre is empty or blank'))
        )

        it('should fail on no artist bankAccount', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, artistData.genre)
                .catch(({ message }) => expect(message).to.equal('artist bankAccount is not a string'))
        )

        it('should fail on empty artist bankAccount', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, artistData.genre, '')
                .catch(({ message }) => expect(message).to.equal('artist bankAccount is empty or blank'))
        )

        it('should fail on blank artist bankAccount', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, artistData.genre, '     ')
                .catch(({ message }) => expect(message).to.equal('artist bankAccount is empty or blank'))
        )

        
        it('should fail on no artist votes', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, artistData.genre, artistData.bankAccount)
                .catch(({ message }) => expect(message).to.equal('artist votes is not a number'))
        )

        
        
        it('should fail on no artist image', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, artistData.genre, artistData.bankAccount, artistData.votes)
                .catch(({ message }) => expect(message).to.equal('artist image is not a string'))
        )

        it('should fail on empty artist image', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, artistData.genre, artistData.bankAccount, artistData.votes, '')
                .catch(({ message }) => expect(message).to.equal('artist image is empty or blank'))
        )

        it('should fail on blank artist image', () =>
            logic.registerArtist(artistData.name, artistData.email, artistData.password, artistData.description, artistData.genre, artistData.bankAccount, artistData.votes, '     ')
                .catch(({ message }) => expect(message).to.equal('artist image is empty or blank'))
        )
    })

    describe('authenticate artist', () => {
        it('should succeed on correct data', () =>
            Artist.create(artistData)
                .then(() =>
                    logic.authenticateArtist('alex@mail.com', '123')
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no artist email', () =>
            logic.authenticateArtist()
                .catch(({ message }) => expect(message).to.equal('artist email is not a string'))
        )

        it('should fail on empty artist email', () =>
            logic.authenticateArtist('')
                .catch(({ message }) => expect(message).to.equal('artist email is empty or blank'))
        )

   /    it('should fail on blank artist email', () =>
            logic.authenticateArtist('     ')
                .catch(({ message }) => expect(message).to.equal('artist email is empty or blank'))
        )

        it('should fail on no artist password', () =>
            logic.authenticateArtist(artistData.email)
                .catch(({ message }) => expect(message).to.equal('artist password is not a string'))
        )

        it('should fail on empty artist password', () =>
            logic.authenticateArtist(artistData.email, '')
                .catch(({ message }) => expect(message).to.equal('artist password is empty or blank'))
        )

        it('should fail on blank artist password', () =>
            logic.authenticateArtist(artistData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('artist password is empty or blank'))
        ) 
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})