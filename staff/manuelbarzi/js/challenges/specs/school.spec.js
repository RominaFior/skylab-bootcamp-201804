'use strict';

describe('school', function () {
    var members = [];

    var s1 = new Student("Mike", "Rogers", 2005, 204511, 8);
    var s2 = new Student("Joe", "Lamm", 2008, 209521, 5);
    var s3 = new Student("Kim", "Diaz", 2006, 205501, 6);
    var s4 = new Student("Eve", "Stars", 2006, 205519, 7);

    members.push(s1, s2, s3, s4);

    var t1 = new Teacher("John", "Smith", 1978, 199014, "Physics");
    var t2 = new Teacher("Mark", "Clancy", 1981, 200162, "Chemistry");

    members.push(t1, t2);

    it('should getInfo provide info', function () {
        expect(members[0].getInfo()).toBe("The student with id 204511 is Mike Rogers, and age 13, and is in 8 grade.");
        expect(members[4].getInfo()).toBe("The teacher with id 199014 is John Smith, and age 40, and their career is Physics.");
    });

    it('should find by name', function () {
        var res = findBy(members, 'Mike');

        expect(res.length).toBe(1);
        expect(res[0]).toEqual(members[0]);
    });

    it('should find by id', function () {
        var res = findBy(members, 205519);

        expect(res).toEqual(members[3]);
    });
});



// members.findBy("Mark")
//->	Name : Mark Clancy.
// DNI : 200162 , Age : 37.
// Type : teacher , Career : Chemistry.	

// members.findBy(209521)
// -> 	Name : Joe Lamm.
// DNI : 209521 , Age : 10.
// Type : Student , Grade : 5."