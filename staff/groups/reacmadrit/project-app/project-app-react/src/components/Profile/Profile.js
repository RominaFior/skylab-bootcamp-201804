import React, { Component } from "react";
import logic from "../../logic";
import { withRouter, Link } from 'react-router-dom'
import './Profile.css'
import swal from 'sweetalert2'

class Profile extends Component {

    defaultPictureUrl = 'https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch_8.png'

    state = {

        userName: '',
        name: '',
        lastName: '',
        age: '',
        location: '',
        picture_url: this.defaultPictureUrl,
        serverErrorMessage: '',
        viewModal: false,
        password: ''

    }

    componentDidMount() {
        let userId = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')

        if (userId && token) {

            logic.retrieve(userId, token).then(resp => {
                Promise.resolve().then(() => {
                    if (resp.data.picture_url) {
                        this.setState({
                            userName: resp.data.username,
                            name: resp.data.name,
                            lastName: resp.data.lastName,
                            age: resp.data.age,
                            location: resp.data.location,
                            picture_url: resp.data.picture_url
                        })
                    }
                    else {
                        this.setState({
                            userName: resp.data.username,
                            name: resp.data.name,
                            lastName: resp.data.lastName,
                            age: resp.data.age,
                            location: resp.data.location
                        })
                    }
                })
            })
        }
    }

    _handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    _handleLastName = (e) => {
        this.setState({
            lastName: e.target.value,
        })
    }

    _handleAge = (e) => {
        this.setState({
            age: e.target.value,
        })
    }

    _handleLocation = (e) => {
        this.setState({
            location: e.target.value,
        })
    }

    _handlePicture_url = (e) => {
        if (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(e.target.value)) {
            this.setState({
                picture_url: e.target.value
            })
        } else {

        }
    }
    _handlePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    _handleUpdate = (e) => {
        e.preventDefault()
        let picture_url = document.getElementById('picture_url').value
        let token = localStorage.getItem('token-app')
        let userId = localStorage.getItem('id-app')
        let userName = this.state.userName
        let pass = this.state.password

        let newProps = {
            name: this.state.name,
            lastName: this.state.lastName,
            age: this.state.age,
            location: this.state.location,
            picture_url
        }

        logic.update(userId, token, userName, pass, newProps).then(resp => {
            if (resp.status === 'OK') {
                swal({
                    type: 'success',
                    title: 'Success!',
                    text: 'Profile updated correctly',
                })

                this.setState({
                    viewModal: true
                })
            } else {
                swal({
                    type: 'error',
                    title: 'Oopsies!',
                    text: resp.error,
                })
                this.setState({ serverErrorMessage: resp.error })
            }
        })
    }

    _closeModal = () => {
        this.setState({
            viewModal: false
        })
    }

    render() {

        if (!this.props.isLogged()) {
            return <h2>You are not allowed</h2>

        } else {
            return (

                <div className="container profile-form text-center">

                    <div className="box-img rounded-circle  m-4 justify-content-center ">
                        <img className='w-100' src={this.state.picture_url}
                            alt=" " />
                    </div>

                    <div className="">
                        <form onSubmit={this._handleUpdate}>
                            <div className="row justify-content-center ">
                                <input className="form-group w-50 mt-4 border pl-3" value={this.state.name} onChange={this._handleName} id="name" type="text" placeholder="Your name" />
                            </div>
                            <div className="row justify-content-center ">

                                <input className="form-group w-50 mt-4 border pl-3" value={this.state.lastName} onChange={this._handleLastName} id="lastName" type="text" placeholder="Your last name"
                                />
                            </div>
                            <div className="row justify-content-center ">
                                <input className="form-group w-50 mt-4 border pl-3" value={this.state.age} onChange={this._handleAge} id="age" type="text" placeholder="What's your age?" />
                            </div>
                            <div className="row justify-content-center ">

                                <input className="form-group w-50 mt-4 border pl-3" value={this.state.location} onChange={this._handleLocation} id="location" type="text" placeholder="What city do you live in?"
                                />
                            </div>
                            <div className="row justify-content-center ">
                                <input className="form-group w-50 mt-4 border pl-3" value={this.state.profile_url} onChange={this._handlePicture_url} id="picture_url" type="text" placeholder="URL for profile picture?"
                                />
                            </div>
                            <div className="row justify-content-center ">
                                <input className="form-group w-50 mt-4 border pl-3" value={this.state.password} onChange={this._handlePassword} id="password" type="password" placeholder="Confirm password"
                                />
                            </div>
                            <div className="row justify-content-center ">

                                <p className="text-danger">{this.state.serverErrorMessage}</p>
                            </div>

                            <div className="row justify-content-center ">

                                <input /*id="button"*/ className="row justify-content-center mb-3 btn bg-darkcyan" type="submit" value='Update' />
                            </div>
                            <div className="row justify-content-center ">
                            </div>
                        </form>
                        <Link to="/unregister">
                            <div className="row justify-content-center ">

                                <button className="mb-5 btn btn-danger">Unregister</button>
                            </div>
                        </Link>
                    </div>

                </div>



            )
        }
    }
}

export default withRouter(Profile);