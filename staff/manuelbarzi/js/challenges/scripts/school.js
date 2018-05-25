'use strict';

/**
 * Constructs a person
 * 
 * @param {string} name 
 * @param {string} surname 
 * @param {number} birthYear 
 * @param {number} id 
 */
function Person(name, surname, birthYear, id) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.id = id;
}

Person.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
};

/**
 * Constructs a student
 * 
 * @param {string} name 
 * @param {string} surname 
 * @param {number} birthYear 
 * @param {number} id 
 * @param {number} grade 
 */
function Student(name, surname, birthYear, id, grade) {
    Person.call(this, name, surname, birthYear, id);
    this.grade = grade;
}

Student.prototype = new Person();

Student.prototype.getInfo = function () {
    return "The student with id " + this.id + " is " + this.name + " " + this.surname +
        ", and age " + this.getAge() + ", and is in " + this.grade + " grade."
};

/**
 * Constructs a teacher
 * 
 * @param {string} name 
 * @param {string} surname 
 * @param {number} birthYear 
 * @param {number} id 
 * @param {string} career 
 */
function Teacher(name, surname, birthYear, id, career) {
    Person.call(this, name, surname, birthYear, id);
    this.career = career;
}

Teacher.prototype = new Person();

Teacher.prototype.getInfo = function () {
    return "The teacher with id " + this.id + " is " + this.name + " " + this.surname +
        ", and age " + this.getAge() + ", and their career is " + this.career + "."
};

/**
 * Finds persons by name or id in array.
 * 
 * @param {Person[]} persons 
 * @param {string | number} nameOrId 
 */
function findBy(persons, nameOrId) {
    if (!(persons instanceof Array)) throw Error('persons array is not valid');

    if (typeof nameOrId !== 'string' && typeof nameOrId !== 'number') throw Error('input name or id is not a string or number');

    persons.forEach(function (p, i) {
        if(!(p instanceof Person)) throw Error('persons array has no valid person at index ' + i);
    })

    if (typeof nameOrId === 'string')
        return persons.filter(function (p) { return p.name === nameOrId });
    else // by id
        return persons.find(function (p) { 
            if (p.id === nameOrId) return p; 
        });
}