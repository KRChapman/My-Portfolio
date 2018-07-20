import React, { Component } from 'react';
import Style from './LayoutStyle.js';
import Menu from '../../container/Menu/Menu.js';
import Header from '../Header/Header.js';
  
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {


    
    return ( 

      <React.Fragment>
        <Header />
        <Menu  />
        <Style.BodyContainer >
          <Style.ContentContainer  >
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