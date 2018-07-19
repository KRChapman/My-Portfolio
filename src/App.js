import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

// const AppWrapper = styled.ul`
// text-align: center;
// border: 1px solid red;
// color: #000;
// `
// const UserForm = styled.form`
// border: 1px solid purple;
// `
// const UserNameInput = styled.input`
// `

class App extends Component {
  render() {
    return (

      <Layout >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Layout >


    );
  }
}

export default App;
