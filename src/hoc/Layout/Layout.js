import React, { Component } from 'react';
import Styled from './LayoutStyle.js';
import Menu from '../../container/Menu/Menu.js';
  
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {


    const style = {verticle: "75px", horizontal: "250px"};
    return ( 

      <Styled.AppContainer >
        <Menu width={style.horizontal}/>
        <Styled.BodyContainer leftMargin={style.horizontal}>
          <Styled.ContentContainer topMargin={style.verticle} >
              <Styled.Title>HI THERE</Styled.Title>
              {this.props.children}
          </Styled.ContentContainer >
        </Styled.BodyContainer>
    
        </Styled.AppContainer >
     )
  }
}

//       

// left = { style.horizontalLeft }
export default Layout;