
'use strict';

/**
 * Provides a security box to host a secret
 secret in the box.
 * 
 * @param {string} pw - the box access credential.
 * @param {string} secret - secret to keep safely in the box.
 * 
 * @throws {Error} - 
 * * keep: function(pw, secret) {},
 */
    



var obtainPw;

(function() {
    var box = {
        pw: '123',
        secret: 'you rock'
    }
    obtainPw = function(text){
        if(box.pw === text){
            return 'this is the secret: ' + box.secret;
      
        } 
    }
})();

obtainPw('123')

// ->getPw('123') | "this is the secret: you rock"