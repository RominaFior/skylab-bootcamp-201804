import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import logic from './logic'
import { Search, List, Info } from './components'

logic.token = '316f8c330c989ac16e9c3a0a6fa1a2b8c3c18935'

class App extends Component {

  search = (query) => {
    this.props.history.push(`/search/${query}`)
  }

  showError() {
    alert('something gone wrong :(')
  }

  render() {
    return (
      <main>
        <header>
          <h1>github app</h1>
        </header>
        <Search onSearch={this.search} />
        <div>
          <Route path="/search/:query" render={props => <List query={props.match.params.query} showInfo={this.showInfo} showError={this.showError} className="left" />} />
          <Route path="/user/:username" render={props => <Info username={props.match.params.username} showError={this.showError} className="right" />} />
        </div>
      </main>
    )
  }
}

export default withRouter(App);
