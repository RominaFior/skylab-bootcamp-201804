pruebas en la consola.

instance of para probar que tipo de resultado obtenemos

a  = [1,2,3]

typeof a
> "object" (all arrays are objects)

OR

a instanceof Array
> true

a instanceof String
> false


function cube(num){

    if(typeof num === 'number') return num * num * num; // this is an early return, which makes the next statement be an if instead of an else, or else if