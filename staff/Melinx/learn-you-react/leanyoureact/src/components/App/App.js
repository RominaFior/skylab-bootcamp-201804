import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Title from '../Title/Title';
import SearchForm from '../SearchForm/SearchForm';
import MainContent from '../MainContent/MainContent';


class App extends Component {

  constructor() {
    super();

    this.state = {
      searchInput: '',
      userGithub: {},
      error: false
    }

    this._catchUser = this._catchUser.bind(this)
    this._handlerSearchUser = this._handlerSearchUser.bind(this)
  }

  _handlerSearchUser(e) {

    let that = this;
    let username = this.state.searchInput
    let url = 'https://api.github.com/users/' + username

    const token = 'be1f8ff4b5d8a848e178aa842fbb494191040cb9'
    const headers = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };

    e.preventDefault();

    fetch(url, headers)
      .then(response => { 
        if (response.status >= 400) {
          throw new Error('pepe tiene pis')
        }
          else
          {return response.json()}
      }
      )
      .then(data => {
        console.log(data)
        that.setState({
          userGithub: data,
          error:false
        })
      })

      .catch(err => {
        this.setState({
          userGithub: err.message,
          error:true
        })
      })

  }

  _catchUser(e) {
    let userName = e.target.value
    this.setState({ searchInput: userName })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title userData={this.state.userGithub} />
        </header>
        <SearchForm catchUser={this._catchUser} searchUser={this._handlerSearchUser} />
        <MainContent onError={this.state.error} userData={this.state.userGithub} />
      </div>
    );
  }
}

export default App;
