const axios = require('axios');

const [HOST, PORT, from, message] = process.argv.slice(2);

axios
    .get(`http://${HOST}:${PORT}`, {
        params: {
            from,
            message
        }
    })
    .then(res => {
        const { data } = res;

        console.log(data);
    })
    .catch(console.error);
