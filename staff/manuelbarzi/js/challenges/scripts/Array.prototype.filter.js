'use strict';

if (typeof Array.prototype.filter !== 'function')
    Array.prototype.filter = function (condition) {
        var res = [];

        for (var i = 0; i < this.length; i++) {
            var val = this[i];

            if (condition(val)) res.push(val);
        }

        return res;
    };