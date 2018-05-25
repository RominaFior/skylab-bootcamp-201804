import React, { Component } from 'react';
import logo from './images/logo-github.png';
import './App.css';
import Title from './components/Title/Title'
import SearchForm from './components/SearchForm/SearchForm'
import MainContent from './components/MainContent/MainContent'
import UserSeacrh from './components/UserSearch/UserSearch'
import logic from './logic'
import UserSearch from './components/UserSearch/UserSearch';


class App extends Component {

  constructor(){
    super()

    this.state={

      username:'',
      userInfo:'',
      notFound:false,
      list:[]
     

    }
  }

  handlerUser=(e)=>{

    this.setState({
      username: e.target.value,
      
      
    })

  }


  handlerSearch=(e)=>{
    
    e.preventDefault();
    logic.searchUsers(this.state.username)
    .then(list => {
      if (list!== undefined){
        if (list.length === 0){
          this.setState({
            notFound: true
          })
        }else{
          this.setState({
            list,
            username: '',
            userInfo: '',
            notFound: false
          
        })}
        
      }
      
      
    }
      
      )

  }

  handlerClick = (username) => {
    logic.retrieveUser(username)
      .then(userInfo => this.setState({userInfo}))
  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text={"GITHUB USERS APP"} />
          <SearchForm 
            handlerSearch={this.handlerSearch}
            handlerUser={this.handlerUser}
            username={this.state.username}
            
          />
        </header>
        <main>
           <UserSearch className= 'list '
           list={this.state.list}
           onError={this.state.onError}
           handlerClick={this.handlerClick}
           notFound={this.state.notFound}
           />
             <MainContent 
              userInfo={this.state.userInfo}
            />
        </main>
        
      </div>
    );
  }
}

export default App;
