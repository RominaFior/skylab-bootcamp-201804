'use strict';

// https://thecatapi.com/docs.html

document.getElementById('button').addEventListener('click', loadkittos);

function loadkittos() {
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open('GET', 'http://thecatapi.com/api/images/get?format=xml&results_per_page=20', true);

    xmlhttp.onload = function () {
        if (this.status == 200) {

            
            var output = '';
            for (var i in kittos) {
                output +=
                    '<div class="kitty">' +
                    '<img src="' + kittos[i].url +
                    '"width="170" height="170">' +
                    '"<p>"' + '<source_url>' + kittos[i].source_url + '</source_url></p>'
                '</div>';
            }

            document.getElementById('kittos').innerHTML = output;
        }

    }
    xmlhttp.send();
};

