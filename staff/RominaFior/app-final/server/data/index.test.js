require('dotenv').config();
const { mongoose, models: { Artist, Event } } = require('.')
const { expect } = require('chai');
const { env: { DB_URL } } = process;

describe('models buskers', () => {

    const alexartist = {
        name: 'Alex',
        email: 'alex@mail.com',
        password: '123',
        description: 'Best coutry music in Barcelona',
        genre: 'Country',
        bankAccount: 'E34-2452-24352',
        votes: 234,
        image: 'image',
        events: []
    }
    const alexevent = {
        name: 'Country in Barcelona',
        date: new Date(),
        location: 'Poblenou',
        owner: ''
    }

    before(() => {
        mongoose.connect(DB_URL)
    })
    beforeEach(() => {
        Promise.all([
            Artist.remove(), Event.deleteMany(),
        ])
    })

    describe('Create artist', () => {
        it('Should success on correct data', () => {
            const artist = new Artist(alexartist)
            return artist.save()
                .then(artist => {
                    expect(artist).to.exist
                    expect(artist._id).to.exist
                    expect(artist.name).to.equal('Alex')
                    expect(artist.email).to.equal('alex@mail.com')
                    expect(artist.password).to.equal('123')
                    expect(artist.description).to.equal('Best coutry music in Barcelona')
                    expect(artist.genre).to.equal('Country')
                    expect(artist.bankAccount).to.equal('E34-2452-24352')
                    expect(artist.votes).to.equal(234)
                    expect(artist.image).to.equal('image')
                    expect(artist.events.length).to.equal(0)
                })
        })
    })


    describe('Create event', () => {
        it('Should success on correct data', () => {

            Artist.create(alexartist)
                .then(artist => {

                    alexevent.owner = artist._id

                    const event = new Event(alexevent)

                    return event.save()
                        .then(event => {

                            expect(event).to.exist
                            expect(event._id).to.exist
                            expect(event.name).to.equal('Country in Barcelona')
                            expect(event.date).to.equal(alexevent.date)
                            expect(event.location).to.equal('Poblenou')
                            expect(event.owner).to.equal(artist._id)

                            artist.events.push(event._id)
                            artist.save()
                            .then(artist => {
                                expect(artist.events.length).to.equal(1)
                                expect(artist.events[0]).to.equal(event._id)
                            })

                        })

                })
        })
    })

    

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
