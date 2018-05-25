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

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    beers.forEach(function (beer) {
        var item = document.createElement('li');
        var button= document.createElement('button');
        button.innerHTML="Info";
        button.addEventListener('click',function() {
            if (!(document.getElementById(beer.id))) {
                var infoID=document.createElement('p');
                infoID.setAttribute("id",beer.id);
                var infoIMG=document.createElement('img');
                
                logic.getBeerInfo(beer.id,function() {
                    infoID.appendChild(document.createTextNode(beer.style.description));
                    infoIMG.src=beer.labels.medium;
                });
                infoID.appendChild(infoIMG);
                item.appendChild(infoID);
            }
            else {
                (document.getElementById(beer.id)).remove();
            }
        });

        item.appendChild(document.createTextNode(beer.name));
        item.appendChild(button);

        list.appendChild(item);
    });
}
