import React, { Component } from 'react';
import Style from './LayoutStyle.js';
import Menu from '../../container/Menu/Menu.js';
import Header from '../Header/Header.js';
  
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShowMenu: false,
     }

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
  }

  toggleMenuHandler(e) {
    console.log('e',e);
    let isShowMenu = !this.state.isShowMenu;
    this.setState({ isShowMenu});
  }


  render() {

   

    
    return ( 

      <React.Fragment>
        
        <Menu showToggleMenu={this.state.isShowMenu}/>
        <Header toggleMenu={this.toggleMenuHandler} showToggleMenu={this.state.isShowMenu}/>
        <Style.BodyContainer showToggleMenu={this.state.isShowMenu}>
          
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