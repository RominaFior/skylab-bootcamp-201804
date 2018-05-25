import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert2';

class Logout extends Component {
    state = {
        isLoggedOut: false
    };

    componentDidMount() {
        localStorage.removeItem('user');

        swal({
            title: 'Logged Out!',
            text: 'See you soon',
            imageUrl:
                'http://wpc.72c72.betacdn.net/8072C72/vos-images/sites/default/files/styles/landscape_1020_560/public/nota_periodistica/promos.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Bye bye',
            animation: false,
            customClass: 'animated flipInX'
        }).then(result => {
            this.setState({
                isLoggedOut: true
            });
        });
    }

    render() {
        return this.state.isLoggedOut ? <Redirect to="/" /> : null;
    }
}

export default Logout;
