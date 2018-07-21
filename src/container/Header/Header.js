
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
    console.log("this.props.toggleMenu", this.props.showToggleMenu);
    return (

      <Style.Container showToggleMenu={this.props.showToggleMenu}>
        <HamburgerMenu toggleMenu={this.props.toggleMenu}/>
        <Style.Title>Full Stack Web Developer </Style.Title>
        <Style.NavBtnsContainer>
          <HeaderBtns > Custimize Settings  </HeaderBtns >
          <HeaderBtns >Color</HeaderBtns >
             
        </Style.NavBtnsContainer>
          
     

      </Style.Container>

      )
    }
  }

  

/* <nav>


</nav> */

export default Header;