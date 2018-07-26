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


  
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShowMenu: false,
      mediaQuery: "850px",
     }

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    this.closeMenuHandler = this.closeMenuHandler.bind(this);
  }

  toggleMenuHandler() {
// this.state.mediaQuery === "9850px" ? false :
    let isShowMenu = !this.state.isShowMenu;
    this.setState({ isShowMenu, mediaQuery: "850px"});
  }

  closeMenuHandler() {
    
    this.setState({ isShowMenu: false, mediaQuery: "9850px"});
  }

  render() {   

    
    return ( 

      <React.Fragment>        
        <Menu mediaQuery={this.state.mediaQuery} closeMenu={this.closeMenuHandler} showToggleMenu={this.state.isShowMenu}/>
        <Header mediaQuery={this.state.mediaQuery} toggleMenu={this.toggleMenuHandler} showToggleMenu={this.state.isShowMenu}/>
        <ContentBody mediaQuery={this.state.mediaQuery} showToggleMenu={this.state.isShowMenu}>
          <Switch>
            <Route path='/projects' component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>      
        </ContentBody>
      </React.Fragment>
   
     )
  }
}


export default Layout;