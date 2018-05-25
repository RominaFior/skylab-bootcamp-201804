'use strict';

describe("Class - a spy, when findBy is used to search for a Person's info.", function() {
    var members, Person, info;
  
    beforeEach(function() {
      members = {
        findBy: function(value) {
          Person = this;
        },
        getInfo: function() {
          return info;
        }
      };
  
      spyOn(members, 'findBy').and.returnValue('Teacher: Mark Clancy\nDNI: 200162\nAge: 37\nSubject: Chemistry');
  
      members.findBy('Mark');
      info = members.getInfo();
    });
  
    it("tracks that the spy was called", function() {
      expect(members.findBy).toHaveBeenCalled();
    });
  
    it("should not affect other functions like Person", function() {
      expect(Person).toEqual(this.name, this.surname, this.yob, this.dni);
    });
  
    it("when called returns the requested value", function() {
      expect(members.findBy('Mark')).toEqual('Teacher: Mark Clancy\nDNI: 200162\nAge: 37\nSubject: Chemistry');
    });
  });

  // describe("Class - a spy to throw an error", function() {
  //   var foo, bar;
  
  //   beforeEach(function() {
  //       members = {
  //           findBy: function(value) {
  //             Person = this[i];
  //           }
  //     };
  
  //     spyOn(members, 'findBy').and.throwError("input should be either the person\'s name OR their dni number");
  //   });
  
  //   it("throws the value", function() {
  //     expect(function() {
  //       members.findBy(true)
  //     }).toThrowError('input should be either the person\'s name OR their dni number');
  //   });
  // });