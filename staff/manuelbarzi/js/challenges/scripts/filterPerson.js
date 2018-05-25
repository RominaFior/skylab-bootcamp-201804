'use strict';

// custom challenge (from sergio for sandy, with love)

/**
 * 
 * @param {string} name 
 * @param {number} height 
 * @param {number} weight 
 * @param {number} age 
 * @param {string} gender - 'male' or 'female'
 */
function Person(name, height, weight, age, gender) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.gender = gender;
}

function Married(name, height, weight, age, gender) {
    Person.call(this, name, height, weight, age, gender);
}

//Married.prototype = Person.prototype;
Married.prototype = new Person();

function Single(name, height, weight, age, gender) {
    Person.call(this, name, height, weight, age, gender);
}

Single.prototype = new Person();

function filterPerson(array) {
        // var res = [];

        // for (var i = 0; i < array.length; i++) {
        //     var val = array[i];

        //     if (val.weight > 70 && val.height > 1.65) res.push(val);
        // }

        // return res;

        return array.filter(function(v) {
            return v.weight > 70 && v.height > 1.65;
        })
    }