import React, { Component } from "react"
import logic from '../../logic'
import celebrities from "../../data/data"
import swal from 'sweetalert2'

class Home extends Component {

    state = {
        picture_url: '',
        userFaceInfo: false,
        famousPeopleInfo: []
    }

    componentDidMount() {
        let userId = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')

        if (userId && token) {

            logic.retrieve(userId, token).then(resp => {
                if (resp.data.picture_url) {
                    this.setState({
                        picture_url: resp.data.picture_url
                    })
                }
                else {
                    swal({
                        type: 'success',
                        title: 'You\'re in!',
                        text: 'Ready for a face compare? Go to profile and upload your picture please :)'
                    })
                }
            })
        }
    }
    retrieveFaceInfo = () => {
        let dataPackage = {
            method: 'POST',
            body: JSON.stringify({ "image": this.state.picture_url }),
            headers: new Headers({
                "Content-Type": "application/json",
                "app_id": "47e7faef",
                "app_key": "3d5e1fd27468674bfd2f6c0cddde59aa"
            })
        }
        if (this.state.picture_url!=='https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch_8.png' && this.state.picture_url.length) {
        fetch('http://api.kairos.com/detect', dataPackage)
            .then(res => res.json())
            .then(res => {
                if (!res.Errors) {
                Promise.resolve()
                    .then(() => {
                        this.setState({
                            userFaceInfo: res.images[0].faces[0].attributes
                        })
                    })
                } else {
                    swal({
                        type: 'error',
                        title: 'Oopsies!',
                        text: 'Please input a valid face'
                    })
                }
            })
            .catch(err => err.message)
        }
        else {
            swal({
                type: 'error',
                title: 'Oopsies!',
                text: 'Please click on "Profile" and upload a picture first'
            })
        }
    }


    comparePics = () => {
        let user = this.state.userFaceInfo
        let winner=logic.compare(user,celebrities)

        if (winner) {
            this.setState({
                winner
            })
        }
        else {
            swal({
                type: 'error',
                title: 'Oopsies!',
                text: 'Please hit the Retrieve button first'
            })
        }
    }

    render() {

        if (this.props.isLogged()) {
            return <div className="text-center">
                <div className="box-img rounded-circle m-4" alt=" " >
                <img className="w-100 "  src={this.state.picture_url}/>
                </div>
                <div className="box-img rounded-circle m-4"  >
                <img className="w-100 " alt=" "  src="http://ishushkanov.com/blogs/wp-content/uploads/%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B.jpg"/>
                <img className="w-100 " src={this.state.winner}/>
                </div>
                <h3>Steps to follow:</h3>
                <h4> #1 - Go to profile and paste a picture url there. </h4>
                <h4> #2 - Come back to Home and hit 'retrieve'. </h4>
                <h4> #3 - After 'retrieve' you should now be able to Compare and see who your match is. </h4>                <button className="btn bg-lightcyan m-2" onClick={this.retrieveFaceInfo}>retrieve!</button>                
                <button className="btn bg-darkcyan m-2" onClick={this.comparePics}>Compare!</button>
            </div>
        } else {
            return <h2>You are not allowed</h2>
        }
    }
}

export default Home;