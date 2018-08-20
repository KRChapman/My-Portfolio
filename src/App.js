import React, { Component } from 'react';
import styled, { ThemeProvider} from 'styled-components';
import Layout from './container/Layout/Layout';
import {
  BrowserRouter,

} from 'react-router-dom';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const theme = { 
  verticle: "75px", 
  horizontal: "250px",
  zindexHighest: 999,
  zindexMiddle: 500,
  zindexLowest: 1,          
  transitionTime: "0.4s",
  fontSize: "16px", 
  backgroundPictureHeight: "350px",
  tablet: 900,
};

class App extends Component {

  render() {
    
    return (
    <BrowserRouter >
      <AppContainer >
        <ThemeProvider theme={theme}>
          < Layout />      
        </ThemeProvider>
      </AppContainer >
    </BrowserRouter >
    );
  }
}

export default App;
