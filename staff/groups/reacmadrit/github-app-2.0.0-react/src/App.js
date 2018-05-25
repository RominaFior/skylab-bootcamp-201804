import React, { Component } from 'react'


import './App.css'
import logic from './logic'
import Form from './components/Form/Form'
import UserList from './components/UserList/UserList'
import DetailUser from './components/DetailUser/DetailUser'

class App extends Component {


  constructor() {
    super()
    this.state = {
      inputText: '',
      resultsList: [],
      userDetails: {}
    }
  }

  showDetails = (login) => {
    logic.retrieveUser(login)
      .then(data =>
        this.setState({
          userDetails: data
        })

      )
  }


  listUsers = e => {
    e.preventDefault()
    if (this.state.inputText.length) {
      logic.searchUsers(this.state.inputText)
        .then(data =>
          this.setState({
            inputText: '',
            resultsList: data,
            userDetails: {}
          }))
    }
  }

  handlerText = e => {

    let inputText = e.target.value

    this.setState({
      inputText: inputText
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Github Users App</h1>
        </header>

        <Form onHandlerText={this.handlerText} onListUsers={this.listUsers} onState={this.state} />

        <div className="padre">
          <section>

            <UserList onState={this.state} onShowDetails={this.showDetails} />
          </section>


          <section>
            <DetailUser onState={this.state} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
