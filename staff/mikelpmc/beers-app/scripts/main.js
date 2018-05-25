'use strict';

var list;
var infoShow;

// document.forms[0].addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (infoShow) infoShow.innerHTML = '';

//     var input = this.elements[0];

//     var query = input.value;

//     logic.searchBeers(query, function(error, beers) {
//         console.log(error);

//         listBeers(beers);
//     });

//     input.value = '';
// });

var timer;
document.forms[0].elements[0].addEventListener('keyup', function(e) {
    clearInterval(timer);

    timer = setTimeout(() => {
        var query = this.value;

        if (query === '') {
            clearList();
        } else {
            logic.searchBeers(query, function(error, beers) {
                if (error) {
                    alert('Oops! Something went wrong: ', error);
                    clearList();
                } else {
                    listBeers(beers);
                }
            });
        }
    }, 500);
});

function listBeers(beers) {
    if (!list) {
        list = document.createElement('ul');

        document.body.appendChild(list);
    }

    clearList();

    if (beers.length) {
        beers.forEach(function(beer) {
            var item = document.createElement('li');

            var link = document.createElement('a');

            link.href = '';

            item.appendChild(link);

            var id = beer.id;

            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (infoShow) infoShow.innerHTML = '';

                handleBeerInfo(id);
            });

            link.appendChild(document.createTextNode(beer.name));

            list.appendChild(item);
        });
    }
}

function handleBeerInfo(id) {
    logic.getBeerInfo(id, function(error, beer) {
        if (error) {
            alert('Oops! something went wrong: ', error);

            clearList();
        } else {
            infoShow = document.createElement('div');

            document.body.appendChild(infoShow);

            var h2 = document.createElement('h2');
            var title = document.createTextNode(beer.name);
            h2.appendChild(title);
            infoShow.appendChild(h2);

            if (beer.labels) {
                if (beer.labels.medium) {
                    var img = document.createElement('img');
                    img.src = beer.labels.medium;
                    infoShow.appendChild(img);
                }
            }

            var description = beer.description
                ? beer.description
                : beer.style.description;
            var p = document.createElement('p');
            p.appendChild(document.createTextNode(description));
            infoShow.appendChild(p);
        }
    });
}

function clearList() {
    if (list) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
}
