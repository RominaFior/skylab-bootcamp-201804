require('dotenv').config();
const { mongoose, models: { User, Event } } = require('.')
const { expect } = require('chai');
const { env: { DB_URL } } = process;

describe('models buskers', () => {

    const userAlex = {
        nombre: 'Alex',
        email: 'alex@mail.com',
        username: 'alexb',
        contraseña: '123',
        confirmaContraseña: '123',
        categoria: 'musical',
        descripcion: 'Mejor música country en Barcelona',        
        events: []
    }
    const alexevent = {
        name: 'Country en Barcelona',
        date: new Date(),
        location: 'Poblenou',
        owner: ''
    }

    before(() => {
        mongoose.connect(DB_URL)
    })
    beforeEach(() => {
        Promise.all([
            User.remove(), Event.deleteMany(),
        ])
    })

    describe('Create user', () => {
        it('Should success on correct data', () => {
            const user = new User(userAlex)
            return user.save()
                .then(user => {
                    expect(user).to.exist
                    expect(user._id).to.exist
                    expect(user.nombre).to.equal('Alex')
                    expect(user.email).to.equal('alex@mail.com')
                    expect(user.username).to.equal('alexb')
                    expect(user.contraseña).to.equal('123')
                    expect(user.confirmaContraseña).to.equal('123')
                    expect(user.categoria).to.equal('musical')
                    expect(user.descripcion).to.equal('Mejor música country en Barcelona')                 
                   
                    expect(user.events.length).to.equal(0)
                })
        })
    })


    describe('Create event', () => {
        it('Should success on correct data', () => {

            User.create(userAlex)
                .then(user => {

                    alexevent.owner = user._id

                    const event = new Event(alexevent)

                    return event.save()
                        .then(event => {

                            expect(event).to.exist
                            expect(event._id).to.exist
                            expect(event.name).to.equal('Country en Barcelona')
                            expect(event.date).to.equal(alexevent.date)
                            expect(event.location).to.equal('Poblenou')
                            expect(event.owner).to.equal(user._id)

                            user.events.push(event._id)
                            user.save()
                            .then(user => {
                                expect(user.events.length).to.equal(1)
                                expect(user.events[0]).to.equal(event._id)
                            })

                        })

                })
        })
    })

    

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
