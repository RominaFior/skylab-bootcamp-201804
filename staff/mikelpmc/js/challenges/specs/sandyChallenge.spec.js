'use strict';

var array = [82, 3, 2, 24, 9, 1, 56, 13];

describe('sandyBrainFuck', function() {
    it('should [82, 3, 2, 24, 9, 1, 56, 13].sandyBrainFuck() return  ["82", "56", "24", "02"], ["13", "09", "03", "01"]', function() {
        var res = array.sandyBrainFuck();

        expect(res).toEqual([
            ['82', '56', '24', '02'],
            ['13', '09', '03', '01']
        ]);
    });

    it('should ["a", 2, "c", false].sandyBrainFuck() throw an Error: Input array should only contain numbers', function() {
        expect(function() {
            ['a', 2, 'c', false].sandyBrainFuck();
        }).toThrow(Error('Input array should only contain numbers'));
    });
});
