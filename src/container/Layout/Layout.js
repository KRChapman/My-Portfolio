import React, { Component } from 'react';
import Style from './LayoutStyle.js';
import Menu from '../../container/Menu/Menu.js';
import Header from '../Header/Header.js';


  
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
        <Style.BodyContainer mediaQuery={this.state.mediaQuery} showToggleMenu={this.state.isShowMenu}>
          
          <Style.ContentContainer >
              <Style.Title>HI THERE</Style.Title>
              {this.props.children}
          </Style.ContentContainer >
        </Style.BodyContainer>
      </React.Fragment>
   
     )
  }
}

//       

// left = { style.horizontalLeft }
export default Layout;