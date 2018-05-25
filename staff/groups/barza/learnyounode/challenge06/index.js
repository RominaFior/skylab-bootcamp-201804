const filterFiles = require('./function');

const [pathDir, filterBy] = process.argv.slice(2);

filterFiles(pathDir, filterBy, (err, files) => {
    if (err) throw Error('hay errrrorrrrrrrr!');

    files.forEach(file => console.log(file));
});
