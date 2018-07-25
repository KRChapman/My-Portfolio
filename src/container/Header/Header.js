
import Style from './HeaderStyle.js'

import React, { Component } from 'react';
import HamburgerMenu from '../../components/SharedUI/HamburgerMenu/HamburgerMenu.js';
import HeaderBtns from './HeaderBtns/HeaderBtns.js';
  
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  

    }

    this.toggleDisplayColorsOptions = this.toggleDisplayColorsOptions.bind(this);
    this.toggleDisplaySettingsOptions = this.toggleDisplaySettingsOptions.bind(this);
  }

  toggleDisplayColorsOptions() {


  }
  toggleDisplaySettingsOptions() {


  }

  render() {
  
    return (

      <Style.Container mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <HamburgerMenu mediaQuery={this.props.mediaQuery} toggleMenu={this.props.toggleMenu}/>
        <Style.Title>Full Stack Web Developer </Style.Title>
        <Style.NavBtnsContainer>
          <HeaderBtns > Custimize Settings  </HeaderBtns >
          <HeaderBtns >Change Colors</HeaderBtns >
             
        </Style.NavBtnsContainer>
          
     

      </Style.Container>

      )
    }
  }

  

/* <nav>


</nav> */

export default Header;