
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
      offSet: 0,
    }

    this.toggleDisplayColorsOptions = this.toggleDisplayColorsOptions.bind(this);
    this.toggleDisplaySettingsOptions = this.toggleDisplaySettingsOptions.bind(this);
    this.closeOptionsHandler = this.closeOptionsHandler.bind(this);
  }

  toggleDisplayColorsOptions() {
    const isColor = !this.state.isColor;
    let offSet = window.pageYOffset;
    this.setState({ isColor, isSettings: false, offSet });
  }
  toggleDisplaySettingsOptions() {
    const isSettings = !this.state.isSettings;

    let offSet = window.pageYOffset;

    this.setState({ isSettings, isColor: false, offSet  });
  }

  closeOptionsHandler() {

    this.setState({ isSettings: false, isColor: false});
  }
//   this.state.isSettings || this.state.isColor ? : null
  render() {
    console.log("boxOpacicty={this.props.boxOpacicty", this.props.boxOpacicty);
    const settingsModal = 
      <ModalContainer changeBoxShadow={this.props.changeBoxShadow} selectColor={this.props.selectColor} 
        isSettings={this.state.isSettings} closeOptions={this.closeOptionsHandler}
        isColor={this.state.isColor} boxOpacicty={this.props.boxOpacicty} offSet={this.state.offSet} 
        saveToLocalStorage={this.props.saveToLocalStorage} resetToDefaults={this.props.resetToDefaults}
        boxSpread={this.props.boxSpread} selectRandomColor={this.props.selectRandomColor} />;
                           // 
    return (

      <React.Fragment>
      <Style.Container backgroundColor={this.props.primaryColor.backgroundColor} 
        mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        
        <HamburgerMenu mediaQuery={this.props.mediaQuery} toggleMenu={this.props.toggleMenu}/>
        <Style.Title>Full Stack Web Developer </Style.Title>
        <Style.NavBtnsContainer>
            <HeaderBtns buttonColor={this.props.primaryColor.buttonColor} 
          toggleOptions={this.toggleDisplaySettingsOptions}> Custimize Settings  </HeaderBtns >
          <HeaderBtns  buttonColor={this.props.primaryColor.buttonColor}
            toggleOptions={this.toggleDisplayColorsOptions} >Change Colors</HeaderBtns >           
        </Style.NavBtnsContainer>     
   
        
      </Style.Container>
      { settingsModal }

        
      </React.Fragment>

      )
    }
  }

  
// <Style.Test>

// </Style.Test> 
/* <nav>


</nav> */

export default Header;