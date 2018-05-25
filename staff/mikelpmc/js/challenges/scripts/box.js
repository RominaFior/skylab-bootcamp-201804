'use strict';

// box.keep('password', 'secret'); // -> save 'secret' with the given password

// box.retrieve('password'); // -> return el "secret"

// box.updatePassword('old-password', 'new-password');

// box.secret // -> show secret! NO!!!
// box.password // -> show password! NO!!!

/**
 *
 */

var box;

(function() {
    box = function() {
        var secret = '';
        var password = '';

        return {
            keep: function(password, secret) {
                this.password = password;
                this.secret = secret;
            },

            retrieve: function(password) {
                if (password !== this.password)
                    throw Error('Contraseña incorrecta');

                return this.secret;
            },

            updatePassword: function(oldPassword, newPassword) {
                if (oldPassword === this.password) this.password = newPassword;
                else return 'La contraseña actual no es correcta';
            }
        };
    };
})();
