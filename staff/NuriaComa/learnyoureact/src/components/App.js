import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Title from "./Title/Title";
import SearchForm from "./SearchForm/SearchForm";
import MainContent from './MainContent/MainContent';


class App extends Component {

  constructor() {
    super();

    this.state = {
      username:'',
      info:{},
      empty:true,
      onError: false

    };

  }

  handlerSearchUser =(e)=>{

    e.preventDefault();

    const headers = {
      headers: {
          Authorization: 'Bearer ' + '7f9720a06c145aaf9b856b224b92a5babcb88314' 
      }
  };
  
  fetch('url', headers)
    return fetch(`https://api.github.com/users/${this.state.username}`, headers)
    .then(res => res.json())
    .then(info => {
      
      if(info.message){
      this.setState({
        info,
        empty: false,
        onError:true
         })
      }
      else{
        this.setState({
          info,
          empty: false,
          onError:false
        
         })
      }
      
  })
}
  handlerWriteName =(e)=>{

    this.setState({ username: e.target.value});
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text={"Welcome to React"} />
        </header>
        <section>
          <SearchForm 
            handlerSearchUser={this.handlerSearchUser}
            handlerWriteName={this.handlerWriteName}
          />
          <MainContent 
          info={this.state.info}
          empty={this.state.empty}
          onError={this.state.onError}
          />
        </section>
      </div>
    );
  }

}
export default App;
