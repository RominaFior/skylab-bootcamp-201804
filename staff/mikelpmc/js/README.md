# ES6+

---

[ECMAScript 6: New Features: Overview and Comparison](http://es6-features.org/)
[ECMAScript 6 Cheatsheet](http://help.wtf/es6)

##### Transpilador ES5 -> ES6+

[Babel · The compiler for writing next generation JavaScript](https://babeljs.io/)

### ES6 Hacks

[7 Hacks for ES6 Developers – DailyJS – Medium](https://medium.com/dailyjs/7-hacks-for-es6-developers-4e24ff425d0b)

### Cheatsheets

[ES2015+ cheatsheet](https://devhints.io/es6)

#### var, const, let

[JavaScript ES6+: var, let, or const? – JavaScript Scene – Medium](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

#### Fetch

[fetch() cheatsheet](https://devhints.io/js-fetch)
[Understanding the Fetch API – freeCodeCamp](https://medium.freecodecamp.org/understanding-the-fetch-api-a7d4c08c2a7)

```js
fetch('https://api')
    .then(response => response.json())
    .then(data => console.log(data));
```

#### Arrow Functions

[JavaScript: Arrow Functions for Beginners – codeburst](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc)

```js
//ES5
function funcName(params) {
    return params + 2;
}
funcName(2); // 4

//ES6
var funcName = params => params + 2;
funcName(2); // 4

//Another example (map)
var arr = [1, 2, 3, 4, 5];

arr.map(v => console.log(v)); //1, 2, 3...

//Devolviendo un objeto con el map
const fun = () => ({ a: 1 }); // {a: 1}
```

#### Bind

Las arrow functions hacen auto-binding implicito.

El primer binding que se haga ya no se puede deshacer, queda ligado para siempre.

```js
//TODO: EXAMPLE
```

#### SPREAD (...)

[JavaScript ES6— The Spread Syntax (…) – codeburst](https://codeburst.io/javascript-es6-the-spread-syntax-f5c35525f754)

```js
var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr); // 1, 2, 3, 4, 5, 6
```

#### Template Literals

```js
var name = 'Juan';
var message = `
        Hello ${name}.
        How are you?
    `;
```

#### Destructuring

```js
    //TODO
    var a = [1, 2, 3];
    var
```

#### Named Parameters

```js
//Sin named Parameters
const getStuffNotBad = (id, force, verbose) => {
  ...
}

getStuffNotBad(150, true, true)

//Con Named Parameters
const getStuffAwesome = ({ id, name, force, verbose }) => {
  ...
}

getStuffAwesome({ id: 150, force: true, verbose: true })
```

#### Clases

[Understanding ES6 Classes – Chuks Festus – Medium](https://medium.com/@chuksFestus/understanding-es6-classes-ada7c14e0213)

##### Class VS Factory Functions

[Class vs Factory function: exploring the way forward](https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15)

[YouTube: Factory Functions](https://www.youtube.com/watch?v=ImwrezYhw4w&t=205s)

#### Static class methods

Se usan como factorias de especializaciones de clases

[Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
