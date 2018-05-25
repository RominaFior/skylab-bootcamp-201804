'use strict'

    //A GOOD SOLUTION:
    
    function toCamelCase(str){
        if(typeof str !== "string"){
          throw Error("str should be a string")
        }
          return str.split(' ').map(function(word,index){
          // If it is the first word make sure to lowercase all the chars.
          if(index == 0){
            return word.toLowerCase();
          }
          // If it is not the first word only upper case the first char and lowercase the rest.
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
      }


    /*muy muy PRO!
    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
          return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
      }
      
      camelize("EquipmentClass name");
      camelize("Equipment className");
      camelize("equipment class name");
      camelize("Equipment Class Name");
      all output "equipmentClassName" */ 
      