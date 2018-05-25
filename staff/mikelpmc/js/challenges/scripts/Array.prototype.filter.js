'use strict';

if (!(Array.prototype.filter instanceof Function)) {
    /**
     *
     * @param {Function} condition - The condition to filter out array elements
     *
     * @returns {Array} - New array with the elements that checks the given condition
     */
    Array.prototype.filter = function(condition) {
        return this.map(function(val) {
            return condition(val.name) && val.name;
        });
    };
}

var arr = [
    { name: 't-shirt', price: 10 },
    { name: 'sockets', price: 5 },
    { name: 'jacket', price: 23 }
];
