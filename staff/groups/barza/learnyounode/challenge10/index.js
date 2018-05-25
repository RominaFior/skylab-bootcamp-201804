const net = require('net');

const PORT = process.argv[2];

const server = net
    .createServer(socket => {
        const date = getDate();

        socket.end(date + '\n');
    })
    .listen(PORT);

const getDate = () => {
    let date = new Date();

    let dd = twoDigits(date.getDate());
    let mm = twoDigits(date.getMonth() + 1);
    let yyyy = date.getFullYear();

    let hours = twoDigits(date.getHours());
    let mins = twoDigits(date.getMinutes());

    return `${yyyy}-${mm}-${dd} ${hours}:${mins}`;
};

const twoDigits = val => {
    return val < 10 ? `0${val}` : val;
};
