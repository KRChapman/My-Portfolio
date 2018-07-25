
import React, { Component } from 'react';
import Styled from './MenuStyle';
import SideTopInfo from '../../components/SideTopInfo/SideTopInfo';

import MidControlNav from '../../components/MidControlNav/MidControlNav';
import MenuWrapper from '../../components/MenuWrapper/MenuWrapper';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      slideLocation: 0,
      buttonClicked: "",
     }

    this.handleChangeMenu = this.handleChangeMenu.bind(this);
  }

  handleChangeMenu(e){
    const slideLocation = e.currentTarget.dataset.location;
    const buttonClicked = e.currentTarget.dataset.btnname;

    this.setState({ slideLocation, buttonClicked});
  }

 

  render() { 

    return ( 
      <Styled.Container mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <SideTopInfo />
        <MidControlNav buttonClicked={this.state.buttonClicked} changeMenu={this.handleChangeMenu} closeMenu={this.props.closeMenu}/>
        <MenuWrapper slideLocation={this.state.slideLocation}/>
      </Styled.Container >
     )
  }
}
 
export default Menu;