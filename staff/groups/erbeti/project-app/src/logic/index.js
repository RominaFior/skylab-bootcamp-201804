

const logic={
    url: "https://skylabcoders.herokuapp.com/api",



    registerUser( username, password, mail){

        return Promise.resolve()
        .then(()=> {
            if (arguments.length<3) throw (Error("There is a missing field"))

            // if ( typeof username !== "string" )

            let headers= {}
            headers.headers= {'Content-Type': 'application/json'}
            headers.method="POST"
            headers.body=JSON.stringify(
            {
                
                username,
                password,
                mail

            })


            return fetch(`${this.url}/user`, headers)
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.status === 'KO'){
                        throw Error(resp.error)
                    }
                    else{return resp}
                })
          
        })
    },

    loginUser(username, password){

        return Promise.resolve()
        .then(()=>{
            let headers= {}
            headers.headers= {'Content-Type': 'application/json'}
            headers.method="POST"
            headers.body=JSON.stringify(
            {
                
                username,
                password

            })


            return fetch(`${this.url}/auth`, headers)
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.status === 'KO'){
                        throw Error(resp.error)
                    }
                    else{
                        return resp
                    }
                })
                
                
          
        })
    },

    retrieveInfo(id, token){
        
        let headers={

           headers: {Authorization:`Bearer ${token}`}
        }
       
        return fetch(`${this.url}/user/${id}`, headers)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.status === 'KO'){
                throw Error(resp.error)
            }
            else {
                return resp
            }
        })

        
    },

    updateInfo(id,body,token){
        
        let headers= {}

        headers.method="PUT"
        headers.body= JSON.stringify(body)
        headers.headers= {Authorization:`Bearer ${token}`,'Content-Type': 'application/json'}
        

        return fetch(`${this.url}/user/${id}`, headers)
            .then(resp => resp.json())
            .then(resp => {
                if (resp.status === 'KO'){
                    throw Error(resp.error)
                }
                else{
                    return resp
                }
            })
      

    },

    unregisterUser(id, body,token){

        let headers={}
        headers.method="DELETE"
        headers.body= JSON.stringify(body)
        headers.headers= {Authorization:`Bearer ${token}`,'Content-Type': 'application/json'}
        // headers.body= JSON.stringify(body)

        return fetch(`${this.url}/user/${id}`, headers)
        .then (resp=>resp.json())
        .then(resp => {
            if (resp.status === 'KO'){
                throw Error(resp.error)
            }
            else {
                return resp
            }
        })
    },



    fetchCharacters(query){
        let particular=[]
        return fetch("http://gateway.marvel.com/v1/public/characters?nameStartsWith="+query+"&ts=1&apikey=8a45092cd1ed514830f450eff194ffc2&hash=e66d8e2fb406b18079056e3bdb64fcd3")
        .then(resp => resp.json())
        .then(resp => resp.data.results)
        .then(resp => {
            
          
            for (let i=0; i<resp.length; i++){
                 particular.push(resp[i])
            }
            return particular
        })

    }
}


export default logic