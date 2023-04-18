import logo from './logo.svg'
import './App.css'

import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        <Home />
        <DemoJSX />
        </div >
    )
  }
}

class DemoJSX extends Component {
  render () {
    return (
      <div>DemoJSX</div>
    )
  }
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>{process.env.API_URL}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
