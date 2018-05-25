import React, { Component } from 'react'
import logic from '../../logic'
import swal from 'sweetalert2'
import Xtorage from '../../Xtorage'
import './login.css';

class Login extends Component {

    state = {
        username: '',
        password: '',
        id:'',
        token:''
    }

    loginUsername = (e) => {
        const username = e.target.value
        this.setState({ username })
    }
    loginPassword = (e) => {
        const password = e.target.value
        this.setState({ password })
    }



    acceptLogin = (e) => {
        e.preventDefault()
        
        // this.props.saveIdToken(this.state.username, this.state.password)
        logic.loginUser(this.state.username, this.state.password)
            .then(res =>
                    {
                    Xtorage.session.clear()
                    
                    Xtorage.session.set('user', { userName: this.state.username ,id: res.data.id, token: res.data.token })
                    console.log(Xtorage.session.get("user"))
                    }            
            )
            .then(resp => {

                swal(
                    'Successful login',
                ).then(this.props.history.push('/home'))
                
                
            })
            .catch(err => 
                {
                    swal(
                        err.message,
                        
    
                    )
                }
                )
                
        }

    redirect= () => {
        this.props.history.push('/register')
    }
    



    render() {
        return (
            <div className="backgroundlogin">
            <div className="login">
            </div>
           <div className="form">
       
                <form className="login-box" onSubmit={this.acceptLogin}>

                    <h2>Login</h2>
                    <p>Username</p>
                    <input type="text" name="username" value={this.state.username} onChange={this.loginUsername} />
                    <p>Password</p>
                    <input type="password" name="password" value={this.state.password} onChange={this.loginPassword} />
                    <p>
                        <button className="goRegister" type="submit">Enter</button>
                    </p>
                    <button className="goRegister" type="button" onClick={this.redirect}>First time? Register!</button>
                </form>
             
            </div>
            </div>
        )
    }


}

export default Login