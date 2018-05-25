# scope and context vs binding and arrow functions
```js
a = {
    b: 1,
    fun: function(arr) {
        return arr.map(v => v + this.b)
    }
} 
a.fun([1,2,3])
(3) [2, 3, 4]
a = {
    b: 1,
    fun: function(arr) {
        return arr.map(function(v) { return v + this.b }.bind(this))
    }
} 
a.fun([1,2,3])
(3) [2, 3, 4]
```
# statics and factory pattern
```js
var Human = (function () {
    class Person {
        constructor(name) {
            this.name = name
        }
        static newWoman(name) { return new Woman(name) }
        static newMan(name) { return new Man(name) }
    }
    class Woman extends Person {
        constructor(name) {
            super(name)
        }
    }
    class Man extends Person {
        constructor(name) {
            super(name)
        }
    }
    return Person;
})();
h = new Human('human')
Person {name: "human"}
w = Human.newWoman('sarah')
Woman {name: "sarah"}
m = Human.newMan('john')
Man {name: "john"}
```