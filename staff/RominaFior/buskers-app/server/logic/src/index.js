'use strict'

const { models: { User, Event, Category } } = require('data')

const logic = {
    /**
     * 
     * @param {string} nombre
     * @param {string} email 
     * @param {string} username
     * @param {string} contraseña
     * @param {string} confirmaContraseña
     * @param {string} categoria
     * @param {number} descripcion
     * 
     * @returns {Promise<boolean>}
     */
    registerUser(nombre, email, username, contraseña, confirmaContraseña, categoria, descripcion) {
        return Promise.resolve()
            .then(() => {
                if (typeof nombre !== 'string') throw Error('user nombre is not a string')

                if (!(nombre = nombre.trim()).length) throw Error('user nombre is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if ((email = email.trim()).length === 0) throw Error('user email is empty or blank')

                if (typeof username !== 'string') throw Error('user username is not a string')

                if (!(username = username.trim()).length) throw Error('user username is empty or blank')

                if (typeof contraseña !== 'string') throw Error('user contraseña is not a string')

                if ((contraseña = contraseña.trim()).length === 0) throw Error('user contraseña is empty or blank')

                if (typeof confirmaContraseña !== 'string') throw Error('user confirmaContraseña is not a string')

                if ((confirmaContraseña = confirmaContraseña.trim()).length === 0) throw Error('user confirmaContraseña is empty or blank')

                if (typeof categoria !== 'string') throw Error('user categoria is not a string')

                if ((categoria = categoria.trim()).length === 0) throw Error('user categoria is empty or blank')

               

                if (typeof descripcion !== 'string') throw Error('user descripcion is not a string')

                if ((descripcion = descripcion.trim()).length === 0) throw Error('user descripcion is empty or blank')


                return User.findOne({ email })
                    .then(user => {
                        if (user) throw Error(`user with email ${email} already exists`)

                        return User.create({ nombre, email, username, contraseña, confirmaContraseña, categoria, descripcion })
                            .then(() => true)
                    })
            })
    },

    /**
 * 
 * @param {string} email 
 * @param {string} username 
 * 
 * @returns {Promise<string>}
 */
    authenticateUser(email, username) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof username !== 'string') throw Error('user username is not a string')

                if ((username = username.trim()).length === 0) throw Error('user username is empty or blank')

                return User.findOne({ email, username })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user.id
            })
    },


    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<User>} 
     */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {

                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id).select({_id:0, nombre:1, email:1, username:1, categoria:1, descripcion:1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
    }, 

     /**
     * 
     * @param {string} id 
     * @param {string} nombre      
     * @param {string} email 
     * @param {string} username 
     * @param {string} newEmail 
     * @param {string} newContraseña
     * 
     * @returns {Promise<boolean>}
     */
    updateUser(id, nombre, email, username, contraseña, newEmail, newContraseña) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof nombre !== 'string') throw Error('user nombre is not a string')

                if (!(nombre = nombre.trim()).length) throw Error('user nombre is empty or blank')
               
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof username !== 'string') throw Error('user username is not a string')

                if ((username = username.trim()).length === 0) throw Error('user username is empty or blank')
                
                if (typeof contraseña !== 'string') throw Error('user contraseña is not a string')

                if ((contraseña = contraseña.trim()).length === 0) throw Error('user contraseña is empty or blank')

                return User.findOne({ email, contraseña })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                if (newEmail) {
                    return User.findOne({ email: newEmail })
                        .then(_user => {
                            if (_user && _user.id !== id) throw Error(`user with email ${newEmail} already exists`)

                            return user
                        })
                }

                return user
            })
            .then(user => {
                user.nombre = nombre 
                user.email = newEmail ? newEmail : email
                user.username = username               
                user.contraseña = newContraseña ? newContraseña : contraseña

                return user.save()
            })
            .then(() => true)
    },


       /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} username 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser(id, email, contraseña) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof contraseña !== 'string') throw Error('user contraseña is not a string')

                if ((contraseña = contraseña.trim()).length === 0) throw Error('user contraseña is empty or blank')

                return User.findOne({ email, contraseña })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user.remove()
            })
            .then(() => true)
    },

    /* addEventToArtist(ownerId, nombre, date, location) {
        return Promise.resolve()
          .then(() => {
            if (typeof ownerId !== 'string') throw Error('owner id is not a string')
    
            if (typeof nombre !== 'string') throw Error('nombre is not a string')
    
            if (typeof date !== 'date') throw Error('date is not a date')
    
            if (typeof location !== 'string') throw Error('location is not a string')   
           
    
            return User.findById(ownerId)
              .then(user => {
                if (!user) throw Error(`ownerId not exists`) // manejarlo dsd cliente si no está logged
    
                return Product.create({ owner: ownerId, nombre, date, location })
                  .then(({ _doc: { _id } }) => {
    
                    user.events.push(_id)
    
                    return user.save()
                      .then(() => _id.toString())
                  })
              })
          })
    
      }, */

     /*  listCategories() {
        return Promise.resolve()
          .then(() => {
            
            return Category.find({})
              
          })
      }, */
}

module.exports = logic 