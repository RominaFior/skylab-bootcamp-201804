var members = [];

function Person(name, surname, y_o_b, dni) {
    this.name = name;
    this.surname = surname;
    this.y_o_b = y_o_b;
    this.dni = dni;
}

Person.prototype.getAge = function () {
    return 2018 - this.y_o_b;
}

function Student(name, surname, y_o_b, dni, grade) {
    Person.call(this, name, surname, y_o_b, dni);
    this.grade = grade;
}
Student.prototype.getInfo = function () {
    msj = "The student " + this.dni + " is " + this.name + " " + this.surname +
        " and and is in " + this.grade + " grade."
}
Student.prototype = new Person();
//Student.prototype = Person.prototype;

function Teacher(name, surname, y_o_b, dni, career) {
    Person.call(this, name, surname, y_o_b, dni);
    this.career = career;
}
Teacher.prototype.getInfo = function () {
    msj = "Teacher. dni : " + this.id + " is " + this.name + " " + this.surname +
        " and his career is : " + this.career + "."
}
Teacher.prototype = Person.prototype;

function findBy(something) {
    if (typeof something === "number") {
        for (var index = 0; index < members.length; index++) {
            if (members[index].dni == something) {
                var msj = "Name : " + members[index].name + " " + members[index].surname + ".\n" +
                    "DNI : " + members[index].dni + " , Age : " + members[index].getAge() + ".\n";
                if (members[index] instanceof Student) {
                    msj += "Type : Student , Grade :" + members[index].grade + " .\n";
                } else {
                    msj += "Type : Teacher , Career :" + members[index].career + " .\n";
                }
                return msj;
            }
            return "no hay coincidencia";
        }
    } else if (typeof something === "string") {
        for (var index = 0; index < members.length; index++) {
            if (members[index].name == something) {
                var msj = "Name : " + members[index].name + " " + members[index].surname + ".\n" +
                    "DNI : " + members[index].dni + " , Age : " + members[index].getAge() + ".\n";
                if (members[index] instanceof Student) {
                    msj += "Type : Student , Grade :" + members[index].grade + " .\n";
                } else {
                    msj += "Type : Teacher , Career :" + members[index].career + " .\n";
                }
                return msj;
            }
            return "no hay coincidencia";
        }
    } else {
        //lanza error;
    }
}


function findBy(input) {
    // if (typeof input === 'number' || typeof input === 'string') {
    for (var i = 0; i < members.length; i++) {
        //debugger
        if (input == members[i].dni || input == members[i].name) {
            return members[i].getInfo;
        } else {
            throw Error('input should be either the person\'s name OR their dni number')
        };

    }
};

var s1 = new Student("Mike", "Rogers", 2005, 204511, 8);
var s2 = new Student("Joe", "Lamm", 2008, 209521, 5);
var s3 = new Student("Kim", "Diaz", 2006, 205501, 6);
var s4 = new Student("Eve", "Stars", 2006, 205519, 7);
members.push(s1, s2, s3, s4);

var t1 = new Teacher("John", "Smith", 1978, 199014, "Physics");
var t2 = new Teacher("Mark", "Clancy", 1981, 200162, "Chemistry");
members.push(t1, t2)



members.s1.getInfo(); -> The student 204511 is Mike Rogers and is in 8 grade.
    members.t1.getInfo() -> Teacher.dni : 199014 is John Smith and his career is: Physics.
        members.findBy("Mark") -> Name : Mark Clancy.
            DNI : 200162, Age : 37.
Type: teacher, Career : Chemistry.
    members.findBy(209521) -> Name : Joe Lamm.
        DNI : 209521, Age : 10.
Type: Student, Grade : 5."
