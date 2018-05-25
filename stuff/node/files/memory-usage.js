function memoryUsage() {
    return process.memoryUsage().heapUsed / 1024 ** 2
}

module.exports = memoryUsage