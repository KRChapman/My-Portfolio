
import React, { Component } from 'react';
import Styled from './MenuStyle';
import SideTopMenu from '../../components/SideTopMenu/SideTopMenu';

import MenuWrapper from '../../hoc/MenuWrapper/MenuWrapper';

import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import MidControlNav from '../../components/MidControlNav/MidControlNav';
import SideBottomMenu from '../../components/SideBottomMenu/SideBottomMenu';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    //top menu 
    // bottom menu links / project info
        // react router this.props.children
    return ( 
      <Styled.Container mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <SideTopMenu />
        <MidControlNav closeMenu={this.props.closeMenu}/>
        <MenuWrapper >
          <Switch>
       
            <Route path='/menu-nav' component={SideBottomMenu} />
            <Route path="/about" component={About} />
            <Route path='/features' exact component={Features} />
         
          </Switch>   

        </MenuWrapper >
      </Styled.Container >
     )
  }
}
 
export default Menu;