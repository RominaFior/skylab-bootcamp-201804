import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main/Main"
import Header from "./components/Header/Header"

class App extends Component {

  isLogged = () => {
    return localStorage.getItem("token-app") ? true : false
  }


  render() {
    return (
      <div className="App">{

        this.isLogged() ?
          <Header isLogged={true} />
          :
          <Header isLogged={false} />

      }
        <Main />

      </div>
    );
  }
}

export default App;
