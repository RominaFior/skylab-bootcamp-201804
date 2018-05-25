'use strict';

// const options = {
//     method: 'GET',
//     headers: {
//         Authorization: "Bearer "
//     }
// }
const APIKey='AIzaSyB_HMv-nb-aIK3UtBq8XN4isaS7Grwmkxk'
const url='https://www.googleapis.com/books/v1/volumes'
function searchBooks(book) {
    fetch(`${url}?q=${book}`)
    .then(res => res.json())
    .catch()
    .then(console.log)
}
