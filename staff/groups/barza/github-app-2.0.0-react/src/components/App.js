import React, { Component } from 'react';

import './App.css';

import logic from './../logic/';

import SearchForm from './searchForm/SearchForm';
import UsersList from './usersList/UsersList';
import UserInfo from './userInfo/UserInfo';

logic.token = 'b13bd45ba7ffcdcf1dfb095a29ca4789f6f3efda';

class App extends Component {
    state = {
        search: '',
        users: '',
        userInfo: {}
    };

    searchUsers = e => {
        e.preventDefault();

        logic.searchUsers(this.state.search).then(users => {
            this.setState({
                search: '',
                users,
                userInfo: {}
            });
        });
    };

    handlerSearch = e => {
        this.setState({
            search: e.target.value
        });
    };

    retrieverUser = userLogin => {
        logic.retrieveUser(userLogin).then(userInfo => {
            this.setState({
                userInfo
            });
        });
    };

    renderUsersList = () => {
        return this.state.users.length > 0 ? (
            <UsersList
                users={this.state.users}
                onRetrieverUser={this.retrieverUser}
            />
        ) : (
                <span>Users not found</span>
            );
    };

    renderUserInfo = () => {
        return <UserInfo user={this.state.userInfo} />;
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Github users app</h1>
                </header>
                <SearchForm
                    onHandlerSearch={this.handlerSearch}
                    onHandlerUsers={this.searchUsers}
                    searchValue={this.state.search}
                />
                <main>
                    <section className="col-left">
                        {this.state.users && this.renderUsersList()}
                    </section>

                    <section className="col-right">
                        {this.state.userInfo.login !== undefined &&
                            this.renderUserInfo()}
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
