
import React, { Component } from 'react';
import Styled from './MenuStyle';
  
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
      <Styled.Container showToggleMenu={this.props.showToggleMenu}>
        
      </Styled.Container >
     )
  }
}
 
export default Menu;