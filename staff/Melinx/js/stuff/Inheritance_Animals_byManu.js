function Being(alive) {
	this.alive = alive;
}

function Animal(name) {
	Being.call(this, true);
	this.name = name || 'anonymous';
}

Animal.prototype = new Being();

function Feline(name) {
	Animal.call(this, name);
}

Feline.prototype = new Animal();

function Cat(name) {
	Feline.call(this, name);
}

Cat.prototype = new Feline();

function Lion(name) {
	Feline.call(this, name);
}

Lion.prototype = new Feline();

function Lioness(name) {
	Lion.call(this, name);
}

Lioness.prototype = new Lion();
Lioness.prototype.hunt = function(animal) { 
	if (!(animal instanceof Animal)) throw Error('lioness need glasses');

	animal.alive = false;

	return animal; 
};
Lioness.prototype.procreate = function(lion) {
	if(!(lion instanceof Lionel)) throw Error('lioness mmm... confused');

	if (Math.random() > 0.5) {
		var num = Math.round(Math.random() * 10);

		if (num > 0) this.children = [];

		for (var i = 0; i < num; i++) {
			var child = Math.random() > 0.5? new Lioness() : new Lionel();

			this.children.push(child);
		}
	}
}

function Lionel(name) {
	Lion.call(this, name);
}

Lionel.prototype = new Lion();
Lionel.prototype.procreate = function(lioness) {
	if(!(lioness instanceof Lioness)) throw Error('lionel confused');

	lioness.procreate(this);
}

function Puma(name) {
	Feline.call(this, name);
}

Puma.prototype = new Feline();

function Person(name, surname) {
	Animal.call(this, name);
	this.surname = surname;
}

Person.prototype = new Animal();
Person.prototype.salute = function() { return 'hello, i am ' + this.name };

function Woman(name, surname) {
	Person.call(this, name, surname);
}

Woman.prototype = new Person();

function Man(name, surname) {
	Person.call(this, name, surname);
}

// Man.prototype = Woman.prototype; // WARN!!! fails on sub-type detection in instances of Woman vs Man.
Man.prototype = new Person();


// demos

var c = new Cat('minino');

console.log(c);

var ls = new Lioness('queen lioness');

console.log(ls);

console.log(ls.hunt(c));

var ll = new Lionel('cecil 3');

console.log(ll);

try {
    ls.procreate(c);
} catch(err) {
    console.error(err);
}

ls.procreate(ll);

console.log(ls);