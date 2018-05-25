import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Title from './Title'
import SearchForm from './SearchForm'
import MainContent from './MainContent'

class App extends Component {
  constructor() {
    super()
    this.state= {
      inputText:'',
      info:{name: ''},
      onError: false
    }
    this._handlerSearchUser=this._handlerSearchUser.bind(this)
    this._handlerWriteName=this._handlerWriteName.bind(this)
  }
  _handlerSearchUser() {
    let url= `https://api.github.com/users/${this.state.inputText}`
    const TOKEN='1449837eeaf3c5047dcc28a55eb2e4c647cf9aa3'
    const headers = {
      headers: {
          Authorization: 'Bearer ' + TOKEN
      }
  }
    fetch(url,headers)
    .then(data => {
      if (data.status===200) {
        return data.json()
      }
      else {
        throw Error('User not found :(')
      }
    })
    .then(res => {
      console.log(res)
      this.setState({
        info: res,
        onError: false
      })
    })
    .catch(err => {
      this.setState({
        info:err.message,
        onError: true
      })})
  }
  _handlerWriteName(e) {
      let text=e.target.value
      this.setState({
        inputText:text
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title onInfo={this.state.info}/>
        </header>
        <div className="form-group">
        <SearchForm onHandlerUser={this._handlerSearchUser} handlerWrite={this._handlerWriteName}/>
        </div>
        <MainContent onInfo={this.state.info} error={this.state.onError}/>
      </div>
    );
  }
}

export default App;
