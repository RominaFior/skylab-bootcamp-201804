const twitter = {
    subs: {}, // subscriptions

    follow(username, sub) {
        if (!this.subs[username]) this.subs[username] = []

        this.subs[username].push(sub)
    },

    tweet(username, message) {
        const subs = this.subs[username]

        if (subs && subs.length)
            subs.forEach(sub => sub(message))
    }
}


twitter.follow('pepito', tweet => console.log(`manu twitter -> pepito: ${tweet}`))
twitter.follow('pepito', tweet => console.log(`mikel twitter -> pepito: ${tweet}`))
twitter.follow('pepito', tweet => console.log(`abel twitter -> pepito: ${tweet}`))

twitter.follow('fulanito', tweet => console.log(`mikel twitter -> fulanito: ${tweet}`))
twitter.follow('fulanito', tweet => console.log(`abel twitter -> fulanito: ${tweet}`))

twitter.tweet('pepito', 'hola mundo!')
twitter.tweet('fulanito', 'hello world!')