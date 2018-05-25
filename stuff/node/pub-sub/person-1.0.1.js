const person = {
    _subs: {},

    _set(prop, value) {
        this[`_${prop}`] = value

        const subs = this._subs[`${prop}Changed`]

        if (subs && subs.length) subs.forEach(sub => sub(value))
    },

    _get(prop) {
        return this[`_${prop}`]
    },

    set name(name) {
        this._set('name', name)
    },

    get name() {
        return this._get('name')
    },

    set surname(surname) {
        this._set('surname', surname)
    },

    get surname() {
        return this._get('surname')
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

