
import Style from './HeaderStyle.js'

import React, { Component } from 'react';
import HamburgerMenu from '../../components/SharedUI/HamburgerMenu/HamburgerMenu.js';
import HeaderBtns from './../../components/SharedUI/HeaderBtns/HeaderBtns.js';
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
    console.log("boxOpacicty={this.props.boxOpacicty", this.props.boxOpacicty);
    const settingsModal = this.state.isSettings || this.state.isColor ? 
      <ModalContainer changeBoxShadow={this.props.changeBoxShadow} selectColor={this.props.selectColor} isSettings={this.state.isSettings}
        isColor={this.state.isColor} boxOpacicty={this.props.boxOpacicty} boxSpread={this.props.boxSpread} /> : null;
                           // 
    return (

      <Style.Container backgroundColor={this.props.primaryColor.backgroundColor} mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <HamburgerMenu mediaQuery={this.props.mediaQuery} toggleMenu={this.props.toggleMenu}/>
        <Style.Title>Full Stack Web Developer </Style.Title>
        <Style.NavBtnsContainer>
          <HeaderBtns buttonColor={this.props.primaryColor.buttonColor} toggleOptions={this.toggleDisplaySettingsOptions} > Custimize Settings  </HeaderBtns >
          <HeaderBtns  buttonColor={this.props.primaryColor.buttonColor} toggleOptions={this.toggleDisplayColorsOptions}  >Change Colors</HeaderBtns >
             
        </Style.NavBtnsContainer>
          
      {settingsModal}
  
      </Style.Container>

      )
    }
  }

  

/* <nav>


</nav> */

export default Header;