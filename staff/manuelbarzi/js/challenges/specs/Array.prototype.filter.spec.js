'use strict';

describe('Array.prototype.filter', function () {
    it('should filter', function () {
        var input = [{ name: 't-shirt', price: 1 }, { name: 'sockets', price: 5 }, { name: 'jacket', price: 10 }];

        var output = input.filter(function (v) { return v.name.indexOf('s') > -1; });

        expect(output.length).toBe(2);
        // expect(output[0]).toEqual(input[0]);
        // expect(output[1]).toEqual(input[1]);
        // or
        expect(input.slice(0, 2)).toEqual(output);
    });
});