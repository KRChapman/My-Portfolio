import React, { Component } from 'react';
import Menu from '../../container/Menu/Menu.js';
import Header from '../Header/Header.js';
import ContentBody from '../../components/MainContent/ContentBody/ContentBody.js';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Projects from './../../components/MainContent/Projects/Projects';
import Contact from './../../components/MainContent/Contact/Contact';
import { defaultPrimary, defaultSecondary, 
        primaryTurquoise, primaryLightBlue, 
        secondaryTurquoise, secondaryBrown } from './../../variables/ColorVariables';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      boxSpread: "1px",
      boxOpacicty: "0.5",
      primaryColor: defaultPrimary,
      secondaryColor: defaultSecondary,
    
      isShowMenu: false,
      mediaQuery: "850px",
     }

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    this.closeMenuHandler = this.closeMenuHandler.bind(this);
    this.selectColorHandler = this.selectColorHandler.bind(this);
  }

  toggleMenuHandler() {
// this.state.mediaQuery === "9850px" ? false :
    let isShowMenu = !this.state.isShowMenu;
    this.setState({ isShowMenu, mediaQuery: "850px"});
  }

  closeMenuHandler() {
    
    this.setState({ isShowMenu: false, mediaQuery: "9850px"});
  }

  selectColorHandler(color) {
    console.log("color", color);
    const colorsPrimary = {
      defaultPrimary,
      primaryTurquoise, primaryLightBlue,
     }
    const colorsSecondary ={
      defaultSecondary,
       secondaryTurquoise,
        secondaryBrown

    }
 
    
    this.setState(currentState => {

      const newPrimaryColor = color in colorsPrimary ?   colorsPrimary[color] : currentState.primaryColor;
      const newSecondaryColor = color in colorsSecondary ? colorsSecondary[color]  : currentState.secondaryColor;
     
      return { primaryColor: newPrimaryColor, secondaryColor: newSecondaryColor}
    });
   

  }

  render() {   

    
    return ( 

      <React.Fragment>
    
        <Menu primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} 
          mediaQuery={this.state.mediaQuery} closeMenu={this.closeMenuHandler} showToggleMenu={this.state.isShowMenu}/>
        <Header selectColor={this.selectColorHandler} primaryColor={this.state.primaryColor}
          mediaQuery={this.state.mediaQuery} toggleMenu={this.toggleMenuHandler} showToggleMenu={this.state.isShowMenu}/>
        <ContentBody mediaQuery={this.state.mediaQuery} showToggleMenu={this.state.isShowMenu}>
          <Switch>
            <Route path='/projects'  render={() => {
              return <Projects boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread}/>         
            }}/>
            <Route path="/contact" render={() => {
              return <Contact boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread} />
            }} />
          </Switch>      
        </ContentBody>

      </React.Fragment>
   
     )
  }
}


export default Layout;