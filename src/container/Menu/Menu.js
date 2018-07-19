
import React, { Component } from 'react';
import Styled from './MenuStyle';
  
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Styled.Container width={this.props.width}>

      </Styled.Container >
     )
  }
}
 
export default Menu;