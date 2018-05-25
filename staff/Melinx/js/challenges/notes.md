    
```sh
a = [{ name: 'jeans', price: 24.99}, {name: "t-shirt", price: 10.99}];
a.reduce(function(accum, v) {return accum + v.price}, 0)

35.98

```

 --> inicializamos el v a 0 porque le estamos dieciendo que sume sobre valores de una propiedad de un array.

------
```sh
 a.filter(function(v) { return v.price > 11 })
// {name: "jeans", price: 24.99}
```
------ que me saque la prenda que contiene cierta letra en su nombre:
```sh
a.find(function(v) { return v.name.indexOf('h') > -1})
{name: "t-shirt", price: 10.99}
```
--- simplemente que te muestre los precios ------
```sh
a.map(function(v) { return v.price })
(2) [24.99, 10.99]
```
---- que te devuelva solo el nombre de la prenda ---
```sh
a.map(function(v) { return v.name } )
(2) ["jeans", "t-shirt"]
```
-------  Un reduce que ACUMULA los que tienen precio mayor a 10 -----


```sh
a.reduce(function(accum, v) { 
if (v.price > 10)
 	return accum + v.price;
return accum;
}, 0);
35.98
```

```sh
function countDown(num){
	console.log(num);

if(--num > -1) countDown(num);
}
```

AS OPPOSED TO -- after argument, which will give us -1 in the count down

```sh
function countDown(num){
	console.log(num);
if num-- > -1) countDown(num);
}
```

```sh
a = [1,2,3]
a.toString()

-- lo utilizamos para poder comparar los resultados de arrays en objetos

Object notes form console:
```

```sh
o = {}
{}
o.name = 'john''

o.toString()
-> "[object Object]"
o.toString = function() {return o}
ƒ () {return o}

o.toString
ƒ () {return o}
o.toString()
{toString: ƒ}toString: ƒ ()__proto__: Object

o = new Object()
{}
o.name = 'john'
"john"

o.salute = (function() {return 'hello buddy!';})
            
ƒ () {return 'hello buddy!';}
o.titles=['full stak developer', 'bar tender'];
(2) ["full stak developer", "bar tender"]
o.consoleLog('hola mundo')

o.consoleLog = function(text) {console.log(text)};
ƒ (text) {console.log(text)}
```

4/19

```sh
var i = 0  tiene scope local si el for esta dentro de la funcion, pero si esta fuera de una funcion la variable i tiene/...?

function fun() {
	var ret;
for (var i = 0; i < 3; i++) {
	if (i ==2) ret = function() { return i }; // this is called "closure", when the function scope of {return i} uses the outer scope for the value of var i
}
return ret;
}


Same as withErrorCapturing error testing function
TRY { testCase() would be a closure function, bc it uses values of the outer scope of the function it’s contained in. 


Otro ejemplo de closure:

function hello(salute){
	return {
		world: function(somebody) {
			return salute + ' ' + somebody;
        }
    }
}
// cada return es un objeto nuevo.
// es decir cada vez q llamamos la funcion se crea un objeto distinto.
hello('hola').world('mundo');
"hola mundo"
--
h = hello('hola'); // h es un objeto... 
h.world('pepito'); // -> "hola pepito"

```
UN EJEMPLO DE LA MISMA CLOSURE APARENTE Q NO FUNCIONA:

```sh
var ret = {
    world: function(somebody) {
        return salute + ' ' + somebody; // ERR: closure invalida, porque no sabe lo que es salute.
        )
    }
function hello(salute) {
        return ret;
    }
};
 ```

 3 SCOPES aqui:
 ```sh
 encargo: 
 // concat('hola').concat('mundo').toString() // --> "hola mundo"
 function concat(text) {
	return {
		concat: function(text2) {
			return {
				toString: function() {
                	return text + ' ' + text2;
				} 
            }  
        }
    }
}
// una funcion q devuelve un objeto q devuelve otro objeto.
undefined
```
EL THIS: 

```sh
var o = { name: 'name', surname: 'surname' }
undefined
o.toString()
"[object Object]"
o.toString = function() { return this.name + ' ' + this.surname }
ƒ () { return this.name + ' ' + this.surname }
o.toString()
"name surname"

caso de HOISITNG con el this:

concat(1).concat(2).concat(3).concat(4).toString() // -> "1, 2, 3, 4"

function concat(text){
    var accum = text;
    return {
        concat: function(text2) {
            accum = accum + ' ' + text2;
            return this; 
            
// apunta al objeto del scope en donde se encuentra // el this no implica closure, sino context. el accum implica closure porque accede a la variable accum definida fuera de su scope.
// cuando creamos una veraible en el scope Global, el objeto de esa var sera window. 
        },

        toString: function() {
            return accum;
        }
    }
}


FUNCION ANONIMA.. "self-executing function" que se llama a si misma. en el contexto Window.

Estas funciones Protegen nuestro código y evitan que otras personas puedan redeclarar variables en el scope global. 
\
```sh
(function() {   
	var m = 'hola mundito';
}) ();
```

EXPLICATIVE case of why we need self-executive func:
```sh
var funA;
(function() {
	funA = function(text) { return wtf(text) }
function wtf(text) { return text + '!!!' }
}) ();
undefined
funA('hola')
"hola!!!"
var funB;
(function() {
	funB = function(text) { return wtf(text) }
function wtf(text) { return text + '???' }
}) ();
undefined
funB('hola')
"hola???"
```

-----

##OBJECT TYPES. This..

```sh
function Person(name, lastName){

	this.name = name;
	this.lastName = lastName;
}

var p =  new Person('john','doe')

p
Person {name: "john", lastName: "doe"}
function Person(name, lastName){

	this.name = name;
	this.lastName = lastName;

	this.salute = function() { return 'hello, my name is ' + this.name };
}

undefined

var john = new Person ('john', 'doe')

john.salute()

"hello, my name is john"
john instanceof Object
true
john instanceof Array
false

```

#prototype is for arrays. manipula el comportamiento de los metodos para los arrays.

Array.prototype.forEach