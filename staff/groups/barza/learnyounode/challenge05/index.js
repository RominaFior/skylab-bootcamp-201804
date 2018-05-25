const fs = require('fs');
const path = require('path');

const [pathDir, filterBy] = process.argv.slice(2);

// const pathDir = process.argv[2];
// const filterBy = process.argv[3];

fs.readdir(pathDir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        const ext = path.extname(file); //extname te proporciona la extensión con el punto '.txt'

        if (ext === `.${filterBy}`) {
            console.log(file);
        }
    });
});
