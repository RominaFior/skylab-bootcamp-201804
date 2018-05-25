const person = {
    _subs: {},

    set name(name) {
        this._name = name

        const subs = this._subs['nameChanged']

        if (subs && subs.length) subs.forEach(sub => sub(name))
    },

    get name() {
        return this._name
    },

    set surname(surname) {
        this._surname = surname

        const subs = this._subs['surnameChanged']

        if (subs && subs.length) subs.forEach(sub => sub(surname))
    },

    get surname() {
        return this._surname
    },
    
    age: -1,
    
    on(event, cb) {
        if (!this._subs[event]) this._subs[event] = []

        this._subs[event].push(cb)
    }
}

person.name = 'james'
console.log(person.name)
person.on('nameChanged', name => console.log(`hey! my name changed to ${name} (1)`))
person.name = 'john'
person.on('nameChanged', name => console.log(`hey! my name changed to ${name} (2)`))
person.name = 'jack'
person.on('surnameChanged', surname => console.log(`hey! my surname changed to ${surname} (3)`))
person.surname = 'doe'

