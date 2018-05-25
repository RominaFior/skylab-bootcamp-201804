import React, { Component } from "react";
import logic from "../../logic";
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2' 

class Login extends Component {

    state = {
        userName: "",
        password: "",
        loginFailedMessage: ""
    }

    _handleKeepName = (e) => {
        let userName = e.target.value;
        this.setState({ userName })
    }


    _handleKeepPassword = (e) => {
        let password = e.target.value;
        this.setState({ password })
    }


    _handleLogin = (e) => {
        e.preventDefault()
        logic.login(this.state.userName, this.state.password)
            .then(res => {

                if (res.status === 'OK') {
                    localStorage.setItem('token-app', res.data.token)

                    localStorage.setItem('id-app', res.data.id)
                    this.props.history.push('/home')

                } else {
                    swal({
                        type: 'error',
                        title: 'Oopsies!',
                        text: res.error,
                      })
                    this.setState({
                        loginFailedMessage: res.error
                    })
                }
            })
    }

    render() {

        return (
           
            <div className="container login-form">
            <h2 className="text-center ">LOGIN </h2>
        
                    <form onSubmit={this._handleLogin}>
                        <div className="row justify-content-center ">
                                <input className="form-group col-xs-4 mt-4 border pl-3" value={this.state.userName} onChange={this._handleKeepName} type="text" placeholder="User name"/>
                        </div>
                        <div className="row justify-content-center ">
                                <input className="form-group col-xs-4 mt-4 border pl-3" value={this.state.password} onChange={this._handleKeepPassword} type="password" placeholder="Password" />
                        </div>
                
                <div className="row justify-content-center ">

                    <div className="form-group justify-content-center ">
                        <input className="btn bg-darkcyan mt-4" type="submit" value="Log me in" />
                    </div>
                </div>

                </form>
            </div>
        )
    }
}

export default withRouter(Login);