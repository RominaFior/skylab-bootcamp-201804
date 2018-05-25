'use strict';

/**
 * Challenge by Pedro Valverde: Inheritance of object properties.
 * Person > Student / Teacher. Student has the grade property and Teacher has the subject one.
 * 
 * Finally, pass name or dni argument to findBy function to getInfo about the subject you search for.
 * 
 */

	function Person(name, surname, yob, dni) {
		this.name = name;
		this.surname = surname;
		this.yob = yob;
		this.dni = dni;
	}

	Person.prototype.getAge = function () {
		return (new Date()).getFullYear() - this.yob;
	}

	function Student(name, surname, yob, dni, grade) {
		Person.call(this, name, surname, yob, dni);
		this.grade = grade;
	}

	Student.prototype = new Person();

	Student.prototype.getInfo = function () {
		var info = 'Student: ' + this.name + ' ' + this.surname + '\nDNI: ' + this.dni + '\nAge: ' + this.getAge() + '\nGrade: ' + this.grade;
		return info;
	};

	function Teacher(name, surname, yob, dni, subject) {
		Person.call(this, name, surname, yob, dni);
		this.subject = subject;
	}

	Teacher.prototype = new Person();

	Teacher.prototype.getInfo = function () {
		var info = 'Teacher: ' + this.name + ' ' + this.surname + '\nDNI: ' + this.dni + '\nAge: ' + this.getAge() + '\nSubject: ' + this.subject;
		return info;
	};

	var s1 = new Student("Mike", "Rogers", 2005, 204511, 8);
	var s2 = new Student("Joe", "Lamm", 2008, 209521, 5);
	var s3 = new Student("Kim", "Diaz", 2006, 205501, 6);
	var s4 = new Student("Eve", "Stars", 2006, 205519, 7);

	var t1 = new Teacher("John", "Smith", 1978, 199014, "Physics");
	var t2 = new Teacher("Mark", "Clancy", 1981, 200162, "Chemistry");
	var t3 = new Teacher("Russell", "Crawford", 1979, 223564, "Math");

	var members = [];
	members.push(s1, s2, s3, s4, t1, t2, t3);

	// y cuando hay dos Marks qué pasa?

	Array.prototype.findBy = function (input) {
		var input;
		// if (!(members instanceof Array)){
		// 	throw Error ('input array is not valid')
		// }
		// if (!(members instanceof Array)){
		// 	throw Error ('input array is not valid')
		// }
		if (typeof input === 'number' || typeof input === 'string') {
			for (var i = 0; i < this.length; i++)
				if (input === this[i].name || input == this[i].dni) {
					console.log(this[i].getInfo());
				}
		} else {
			throw Error('input should be either the person\'s name OR their dni number')
		};
	};
	members.findBy('Mark');


	members[1].getInfo();