import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import logic from '../../logic'
import swal from 'sweetalert2'
import Xtorage from '../../Xtorage'
import './profile.css';

class Profile extends Component {

    state = {
        username: "",
        password: "",
        deletionPassword: "",
        name: "",
        surname: "",
        birth: "",
        location: "",
        additional: ""

    }

    
     componentDidMount() {

        
         const { id, token } = Xtorage.session.get("user")
         logic.retrieveInfo(id, token)
             .then(user => {
                 this.setState({
                     username: user.data.username,
                     name: user.data.name,
                     surname: user.data.surname,
                     birth: user.data.birth,
                     location: user.data.location,
                     additional: user.data.additional
                 })
             })
        
     }

    

    updateInfoAndPrint = (e) => {
        e.preventDefault()
        
        
        const { userName, id, token } = Xtorage.session.get("user")
        
        Promise.resolve()
        .then(()=> this.setState({username: userName}) )
        .then(()=> {
            let body= {
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                surname: this.state.surname,
                birth: this.state.birth,
                location: this.state.location,
                additional: this.state.additional
            }
            return body
        })
        .then(body => {

            
            logic.updateInfo(id, body, token)
            // .then(logic.retrieveInfo(id, token)
            // .then(resp => this.setState({
            //     name: resp.data.name,
            //     surname: resp.data.surname,
            //     birth: resp.data.birth,
            //     location: resp.data.location,
            //     additional: resp.data.additional
            // })
            // ))
            .then(()=> swal(
                'Changes saved!'
            ))
            .catch(err => swal(
                err.message
            ))
        })
        .then(()=> this.setState({password: ''}) )
        
        
        
    }


    deleteUser= (e) => {

        e.preventDefault()

        const { userName, id, token } = Xtorage.session.get("user")
        
        Promise.resolve()
        .then(()=> this.setState({username: userName}) )
        .then(()=> {
            let body= {
                username: this.state.username,
                password: this.state.deletionPassword,
            }
            return body
        })
        .then(body => 
            logic.unregisterUser(id, body, token)
            .then(()=> swal(
                'User deleted!'
            ).then(() => this.props.history.push('/')))
            .then(()=> Xtorage.session.clear())
            .catch(err => swal(
                err.message
            ))
        )

    }


    redirect = (e) => {
        this.props.history.push('/home')
    }

    redirectLanding = (e) => {
        this.props.history.push('/')
    }

    logOut= (e) => {
        Xtorage.session.clear()
        this.props.history.push('/')
    }


    updateName = (e) => {
        const name = e.target.value
        this.setState({ name })
    }
    updateSurname = (e) => {
        const surname = e.target.value
        this.setState({ surname })
    }
    updateBirth = (e) => {
        const birth = e.target.value
        this.setState({ birth })
    }
    updateLocation = (e) => {
        const location = e.target.value
        this.setState({ location })
    }
    updateAdditional = (e) => {
        const additional = e.target.value
        this.setState({ additional })
    }
    receivePassword = (e) => {
        const password = e.target.value
        this.setState({ password })
     }

    receiveDeletionPassword = (e) => {
        const deletionPassword = e.target.value
        this.setState({ deletionPassword })
    }

    render() {
        
            return (

                <div  className="backgroundprofile">
                <div className="boxLogOut">
                    <button className="login-button"  type="button" onClick={this.redirect}>Home</button>
                    <button className="register-button" type="button" onClick={this.logOut}>Log out</button>

                </div>
                <div className="profile">
                </div>
                <div className="form3">
                    <h1 className="Profile-title">Profile info</h1>
                    <form className="App" onSubmit={this.updateInfoAndPrint}>
                        <p>NAME: </p>
                        <input type="text" name="name" value={this.state.name} onChange={this.updateName} />
                        <p>SURNAME: </p>
                        <input type="text" name="surname" value={this.state.surname} onChange={this.updateSurname} />
                        <p>BIRTH: </p>
                        <input name="birth" type="date"   value={this.state.birth} onChange={this.updateBirth} />
                        <p>LOCATION: </p>
                        <input type="text" name="location" value={this.state.location} onChange={this.updateLocation} />
                        <p>ADDITIONAL: </p>
                        <input type="textarea" rows="20" cols="50" name="message" value={this.state.additional} onChange={this.updateAdditional} />
    
                        <p>Type your password to save changes: </p>
                        <input type="password" name="password" value={this.state.password} onChange={this.receivePassword} />
    
                        <button className="butprofile" type="submit">Save changes</button>
                    </form>
                    <form onSubmit={this.deleteUser}>
                    <p>Type your password to unregister: </p>
                    <input type="password" name="deletionPassword" onChange={this.receiveDeletionPassword} />
                    <button className="butprofile" type="submit">Delete</button>
                    </form>
                    </div>
                </div>
            )
        
        
    }

}








export default withRouter(Profile)