function pow(a, b, callback) {
    if (callback)
        setTimeout(() => callback(a ** b), 0)
    else
        return Promise.resolve()
            .then(() => a ** b)
}

pow(2, 2, res => pow(res, 3, res => pow(res, 4, console.log)))

pow(2, 2)
    .then(res =>
        pow(res, 3)
    )
    .then(res =>
        pow(res, 4)
    )
    .then(console.log)