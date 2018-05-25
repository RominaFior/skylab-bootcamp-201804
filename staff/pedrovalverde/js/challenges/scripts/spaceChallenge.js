function space(num) {
    var txt = "";
    for (var aux = 0; aux < num; aux++) {
        txt += " ";
    }
    txt += "|";

    return {
        space: function (num) {
            for (var aux = 0; aux < num; aux++) {
                txt += " ";
            }
            txt += "|";
            return this;
        },
        show: function () {
            return txt.toString();
        }

    }
}

console.log(space(3).space(2).space(4).show());
space(3).space(2).space(4).show();
