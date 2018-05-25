    function initialize() {
    var dates = {};
    return {
        keep: function (password, mySecrets) { 
             dates["pass"] = password;
             dates["secret"] = mySecrets;
            return console.log("done");
        },
        retrieve: function (password) {
            if (dates["pass"] == password) {
                return console.log(dates["secret"]);
            } else {
                return console.log("wrong pass");
            }
        },
        updatePass: function (currentPass, newPass) {
            if (currentPass == dates["pass"]) {
                dates["pass"] = newPass;
                return console.log("pass changed");
            } else {
                return console.log("wrong pass");
            }
        }
    }
}

var box = initialize();
box.keep('123456', 'texto a guardar');
box.retrieve('123456') //-> returns the secret
box.updatePass('123456', '654321');