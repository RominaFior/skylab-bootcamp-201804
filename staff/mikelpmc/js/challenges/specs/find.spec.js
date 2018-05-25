'use strict';

describe('find', function() {
    it('should find(["john", "mary", "jack"], function(v) { return v.indexOf("a") > -1; }) should return "mary"(', function() {
        var res = find(['john', 'mary', 'jack'], function(v) {
            return v.indexOf('a') > -1;
        });

        expect(res).toBe('mary');
    });
});
