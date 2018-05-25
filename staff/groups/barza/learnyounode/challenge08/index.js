const http = require('http');
const bl = require('bl');

const URL = process.argv[2];

http.get(URL, response => {
    response.pipe(
        bl((err, data) => {
            if (err) throw Error(err.message);

            data = data.toString();

            console.log(data.length);
            console.log(data);
        })
    );
});
