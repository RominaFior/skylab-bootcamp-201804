function itemName(path) {
    const parts = path.split('/')

    return parts[parts.length - 1]
}

const filename = itemName(__filename)

const foldername = itemName(__dirname)

console.log(`i am file ${filename} and i am located in folder ${foldername}`)