# scoped vars (var vs let)

```js
for (var i = 1; i < 5; i++){
   setTimeout(() => console.log(i), 1000);
}

5
5
5
5

for (let i = 1; i < 5; i++){
   setTimeout(() => console.log(i), 1000);
}

1
2
3
4

for (var i = 1; i < 5; i++){
   ((i) => {
		setTimeout(() => console.log(i), 1000);
   })(i)
}

1
2
3
4
```

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

# class inheritance, method overriding, and accessing ancestor members by means of super and __proto__ (WARN!) 

```js
class Grandma {
	toString() { return 'i am grandma' }
}

class Mom extends Grandma {
	toString() { return 'i am mom' }
}

class Daughter extends Mom {
	toString() { return 'i am daughter' }
}

class ConfusedDaughter extends Mom {
    toString() { return super.toString() }
}

class VeryConfusedDaughter extends Mom {
    toString() { return this.__proto__.__proto__.__proto__.toString() }
}

console.log(new Grandma().toString())
// -> "i am grandma"

console.log(new Mom().toString())
// -> "i am mom"

console.log(new Daughter().toString())
// -> "i am daughter"

console.log(new ConfusedDaughter().toString())
// -> "i am mom"

console.log(new VeryConfusedDaughter().toString())
// -> "i am grandma"
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

# References

[ES6 tips and tricks to make your code cleaner, shorter, and easier to read!](https://medium.freecodecamp.org/make-your-code-cleaner-shorter-and-easier-to-read-es6-tips-and-tricks-afd4ce25977c)

