'use strict';

var box = box();

test(
    function() {
        box.keep('123', 'test');

        return box.retrieve('123');
    },
    'box.keep("123", "test") should save secret "test" with "123" password',
    function(result) {
        return result === 'test';
    }
);

test(
    function() {
        return box.retrieve('123');
    },
    'box.retrieve(password) should return test',
    function(result) {
        return result === 'test';
    }
);

test(
    function() {
        box.updatePassword('123', '123456');

        return box.retrieve('123456');
    },
    "box.updatePassword('123', '123456') should update password to 123456",
    function(result) {
        return result === 'test';
    }
);
