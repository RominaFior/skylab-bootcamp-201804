const http = require('http');
const rp = require('request-promise');

const urls = process.argv.slice(2);

(async function() {
    await urls.forEach(async url => {
        console.log(await rp(url).then(data => data));
    });
})();
