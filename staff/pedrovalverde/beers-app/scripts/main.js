'use strict';

document.forms[0].addEventListener('submit', function (e) {
    e.preventDefault();

    var input = this.elements[0];

    var query = input.value;

    logic.searchBeers(query, function (beers) {
        listBeers(beers);
    });

    input.value = '';


});

var list;

function listBeers(beers) {
    if (!list) {
        list = document.createElement('ul');

        document.body.appendChild(list);
    }

    //list.innerHTML = '';
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    beers.forEach(function (beer) {
        var item = document.createElement('li');
        list.appendChild(item).setAttribute("id", beer.id);

        var a = document.createElement('a');
        a.href = "#";
        a.appendChild(document.createTextNode(beer.name));
        a.addEventListener("click", function () {
            logic.getBeerInfo(beer.id, function(){
                showInfo(beer);
            });
        });

        item.appendChild(a);

    });
}


function showInfo(beer) {
    var div = document.createElement('div');
    while (div.firstChild){
        div.removeChild(div.firstChild  );
    }
    
    
    list.appendChild(div);
    var h1 = document.createElement('h1');
    h1.innerHTML = beer.name;
    div.appendChild(h1);
    var desc = document.createElement('section');
    desc.innerHTML = beer.style.description;
    div.appendChild(desc);

}
