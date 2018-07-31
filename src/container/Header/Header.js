
import Style from './HeaderStyle.js'

import React, { Component } from 'react';
import HamburgerMenu from '../../components/SharedUI/HamburgerMenu/HamburgerMenu.js';
import HeaderBtns from './HeaderBtns/HeaderBtns.js';
import ModalContainer from '../../components/SharedUI/Modal/ModalContainer.js';
  
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isSettings: false,
      isColor: false,
    }

    this.toggleDisplayColorsOptions = this.toggleDisplayColorsOptions.bind(this);
    this.toggleDisplaySettingsOptions = this.toggleDisplaySettingsOptions.bind(this);
  }

  toggleDisplayColorsOptions() {
    const isColor = !this.state.isColor;
    this.setState({ isColor, isSettings: false });
  }
  toggleDisplaySettingsOptions() {
    const isSettings = !this.state.isSettings;
    this.setState({ isSettings, isColor: false });
  }

  render() {
    const settingsModal = this.state.isSettings || this.state.isColor ? 
                          <ModalContainer isSettings={this.state.isSettings}
                           isColor={this.state.isColor} /> : null;
                           // 
    return (

      <Style.Container backgroundColor={this.props.primaryColor.backgroundColor} mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <HamburgerMenu mediaQuery={this.props.mediaQuery} toggleMenu={this.props.toggleMenu}/>
        <Style.Title>Full Stack Web Developer </Style.Title>
        <Style.NavBtnsContainer>
          <HeaderBtns buttonColor={this.props.primaryColor.buttonColor} toggleOptions={this.toggleDisplaySettingsOptions} > Custimize Settings  </HeaderBtns >
          <HeaderBtns buttonColor={this.props.primaryColor.buttonColor} toggleOptions={this.toggleDisplayColorsOptions} >Change Colors</HeaderBtns >
             
        </Style.NavBtnsContainer>
          
      {settingsModal}
  
      </Style.Container>

      )
    }
  }

  

/* <nav>


</nav> */

export default Header;