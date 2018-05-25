'use strict';

document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);

            var output = '';
            for (var i in users) {
                output +=
                    '<div class="user">' +
                    '<img src="' + users[i].avatar_url + 
                    '"width="70" height="70">' +
                    '<ul>' + '<li>ID: ' + users[i].id + '</li>' + 
                    '<li>Login: ' + users[i].login + '</li>' + 
                    '</ul>' +
                    '</div>';
            }

            document.getElementById('users').innerHTML = output;
        }

    }
    xhr.send();
};


// document.forms[0].addEventListener('submit', function (e) {
//     e.preventDefault();

//     var input = this.elements[0];

//     var query = input.value;

//     logic.searchBeers(query, function (beers) { // beers === results
//         listBeers(beers);
//     });

//     input.value = '';
// });

// var list;

// function listBeers(beers) {
//     if (!list) {
//         list = document.createElement('ul');

//         document.body.appendChild(list);
//     }

//     //list.innerHTML = '';
//     while (list.firstChild) {
//         list.removeChild(list.firstChild);
//     }

//     beers.forEach(function (beer) {
//         var item = document.createElement('li');
//         var button = document.createElement('button');
//         button.innerHTML = 'Get info';

//         button.addEventListener('click', function () {
//             if (!(document.getElementById(beer.id))) {
//                 var beerDesc = document.createElement('p');
//                 beerDesc.setAttribute("id",beer.id);
//                 var beerLabel = document.createElement('img');

//                 logic.getBeerInfo(beer.id, function () {
//                     beerDesc.appendChild(document.createTextNode(beer.style.description));
//                     beerLabel.src = beer.labels.medium || 'sorry no image ';

//                 });

//                 item.appendChild(beerDesc);
//                 beerDesc.appendChild(beerLabel);

//             } else {
//                 (document.getElementById(beer.id)).remove();
//             }
//         });

//         item.appendChild(document.createTextNode(beer.name));

//         item.appendChild(button);
//         list.appendChild(item);

//     });
// }

// /////-----------------------------

// // function listBeerInfo(){
// //     createElementbyId()


// // }