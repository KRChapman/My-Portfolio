import { Container, NavBtnsContainer, Title} from './HeaderStyle.js'
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
    this.closeOptionsHandler = this.closeOptionsHandler.bind(this);
  }

  toggleDisplayColorsOptions() {
    const isColor = !this.state.isColor;
    this.setState({ isColor, isSettings: false });
  }
  toggleDisplaySettingsOptions() {
    const isSettings = !this.state.isSettings;
    this.setState({ isSettings, isColor: false });
  }

  closeOptionsHandler() {
    this.setState({ isSettings: false, isColor: false});
  }

  render() {
    const settingsModal = <ModalContainer changeBoxShadow={this.props.changeBoxShadow} selectColor={this.props.selectColor} 
                            isSettings={this.state.isSettings} closeOptions={this.closeOptionsHandler}
                            isColor={this.state.isColor} boxOpacicty={this.props.boxOpacicty} offSet={this.state.offSet} 
                            saveToLocalStorage={this.props.saveToLocalStorage} resetToDefaults={this.props.resetToDefaults}
                            boxSpread={this.props.boxSpread} selectRandomColor={this.props.selectRandomColor} />;
                            
    return (
      <React.Fragment>
      <Container backgroundColor={this.props.primaryColor.backgroundColor} 
        mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>       
        <HamburgerMenu mediaQuery={this.props.mediaQuery} toggleMenu={this.props.toggleMenu}/>
        <Title>Full Stack Web Developer </Title>
        <NavBtnsContainer>
          <HeaderBtns buttonColor={this.props.primaryColor.buttonColor} 
              toggleOptions={this.toggleDisplaySettingsOptions}>Customize Shadows</HeaderBtns >
          <HeaderBtns  buttonColor={this.props.primaryColor.buttonColor}
            toggleOptions={this.toggleDisplayColorsOptions} >Change Colors</HeaderBtns >           
        </NavBtnsContainer>            
      </Container>
      { settingsModal }      
      </React.Fragment>
    )
  }
}

export default Header;