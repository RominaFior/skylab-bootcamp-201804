[Promises explained with simple real life analogies](https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138)

[JavaScript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)

[Promesas de JavaScript: introducción](https://developers.google.com/web/fundamentals/primers/promises?hl=es)

demos

* retrieving users data (login, followers, following) with no order, just fetching them by iterating the list

```js
const headers = { headers: { Authorization: 'Bearer 316f8c330c989ac16e9c3a0a6fa1a2b8c3c18935'}}

fetch('https://api.github.com/search/users?q=abc&per_page=10', headers)
.then(res => res.json())
.then(data => {
	const promises = data.items.map(item => {
		console.log(item.login)

    	const user = item.login
		return fetch(`https://api.github.com/users/${user}`, headers)
			.then(res => res.json())
            .then(data => {
                console.log(data.login, data.following, data.followers)
            })
	})

	return Promise.all(promises)
})
.catch(err => {debugger})

console.log('continue...')

continue...
abcdabcd987
realslimshanky
colingourlay
abcminiuser
abcsds
aabc
Coder-ZJQ
wanesta
Aqours
abcang
abcdabcd987 176 173
abcminiuser 3 158
colingourlay 235 148
realslimshanky 34 69
abcsds 226 71
Coder-ZJQ 48 18
aabc 3 19
wanesta 28 6
abcang 29 52
Aqours 10 39
```

* retrieving users data in block and in order

```js
const headers = { headers: { Authorization: 'Bearer 316f8c330c989ac16e9c3a0a6fa1a2b8c3c18935'}}

fetch('https://api.github.com/search/users?q=abc&per_page=10', headers)
.then(res => res.json())
.then(data => {
	const promises = data.items.map(item => {
		console.log(item.login)
    	const user = item.login
		return fetch(`https://api.github.com/users/${user}`, headers)
	})

	return Promise.all(promises)
})
.then(resps => {
	return Promise.all(resps.map(res => res.json()))
})
.then(datas => {
	datas.forEach(data => console.log(data.login, data.following, data.followers))
})
.catch(err => {debugger})

console.log('continue...')

continue...
realslimshanky
colingourlay
abcdabcd987
abcminiuser
abcsds
aabc
Coder-ZJQ
wanesta
Aqours
abcang
realslimshanky 34 69
colingourlay 235 148
abcdabcd987 176 173
abcminiuser 3 158
abcsds 226 71
aabc 3 19
Coder-ZJQ 48 18
wanesta 28 6
Aqours 10 39
abcang 29 52
```

* retrieving users data sequencially, one after each, following the order in the list

```js
const headers = { headers: { Authorization: 'Bearer 316f8c330c989ac16e9c3a0a6fa1a2b8c3c18935'}}

fetch('https://api.github.com/search/users?q=abc&per_page=10', headers)
.then(res => res.json())
.then(data => {
	let p = Promise.resolve()

	data.items.forEach(item => {
		console.log(item.login)

    	const user = item.login

		p = p.then(() => fetch(`https://api.github.com/users/${user}`, headers)
                .then(res => res.json())
                .then(data => {
                    console.log(data.login, data.following, data.followers)
                })
			)
	})

	return p
})
.catch(err => {debugger})

console.log('continue...')

continue...
realslimshanky
abcdabcd987
colingourlay
abcminiuser
abcsds
aabc
Coder-ZJQ
wanesta
abcang
Aqours
realslimshanky 34 69
abcdabcd987 176 173
colingourlay 235 148
abcminiuser 3 158
abcsds 226 71
aabc 3 19
Coder-ZJQ 48 18
wanesta 28 6
abcang 29 52
Aqours 10 39
```

* running asynchronous (stack vs queue)

```js
// stack A -> B -> C

function funA() {
	console.log('A')
	funB()
}

function funB() {
	console.log('B')
	funC()
}

function funC() {
	console.log('C')
}

// stack D -> E -> F

function funD() {
	console.log('D')
	funE()
}

function funE() {
	console.log('E')
	funF()
}

function funF() {
	console.log('F')
}

// stack G -> H -> I

function funG() {
	console.log('G')
	funH()
}

function funH() {
	console.log('H')
	funI()
}

function funI() {
	console.log('I')
}

// run async all stacks with same delay (1s)

var start = Date.now()

setTimeout(() => {
	console.log(Date.now() - start)
	funA()
}, 1000); 

setTimeout(() => {
	console.log(Date.now() - start)
	funD()
}, 1000);

setTimeout(() => {
	console.log(Date.now() - start)
	funG()
}, 1000);	


1005
A
B
C
1007
D
E
F
1008
G
H
I
```
