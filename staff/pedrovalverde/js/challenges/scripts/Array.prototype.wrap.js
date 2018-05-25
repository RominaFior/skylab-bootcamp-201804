/*
if (typeof Array.prototype.wrap !== 'function')
    Array.prototype.wrap = function (ini, fin) {
        return this.map(function (i) {
            return i = ini + i + fin;
            //return this;
        })
    };
*/

if (typeof Array.prototype.wrap !== 'function')
    Array.prototype.wrap = function (ini, fin) {
        var newArray = [];
        for (var index = 0; index < this.length; index++) {
            newArray[index] = ini + this[index] + fin;
        }
        return newArray;
    };

var a = [1, 2, 3];
console.log(a.wrap('[', ']')); // -> ['[1]', '[2]', '[3]']
console.log(a.wrap('[', ']').wrap('{', '}')); // -> ['{[1]}', '{[2]}', '{[3]}']
console.log("hola");
console.log(a.wrap('[', ']').wrap('{', '}').wrap('<', '>')); // -> ['<{[1]}>', '<{[2]}>', '<{[3]}>']
