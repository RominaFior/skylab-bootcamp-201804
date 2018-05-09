import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import { userActions } from '../_actions';

class HomePage extends Component {
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }

    handleLogoutUser() {
        localStorage.setItem('token', '')
    }

    handleDeleteUser(id) {
        //return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        //const { user, users } = this.props;
        console.log("id : " + localStorage.getItem("id"))
        console.log("token : " + localStorage.getItem("token"))
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-md-6 col-md-offset-3">
                        {<h1>WELLCOME HOME  {localStorage.getItem('userName')}!
                </h1>}

                        {/* <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                } */}
                        <p>
                            <Link to="/profile" className="btn btn-link">Profile</Link>
                            <Link to="/" onClick={this.handleLogoutUser}>Logout</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;