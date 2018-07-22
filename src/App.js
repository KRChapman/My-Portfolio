import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider} from 'styled-components';


import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Layout from './container/Layout/Layout';


const AppContainer = styled.div`
  width: 100%;
   height: 100%; 
  display: flex;

`;

const theme = { verticle: "75px", 
               horizontal: "250px",
               zindexHighest: 999,
               zindexMiddle: 500,
               zindexLowest: 1,
               mediaQuery: "850px",
               transitionTime: "0.4s",

              };

class App extends Component {
  render() {
    return (
    <BrowserRouter >
      <AppContainer >
        <ThemeProvider theme={theme}>
          <Layout >
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Layout >
        </ThemeProvider>
      </AppContainer >
    </BrowserRouter >

    );
  }
}

export default App;
