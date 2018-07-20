
import Style from './HeaderStyle.js'

import React, { Component } from 'react';
import HamburgerMenu from '../../components/SharedUI/HamburgerMenu/HamburgerMenu.js';
  
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (

      <Style.Container>

          <h2>Title</h2>
        <Style.NavBtnsContainer>
          
          <button>Custimize Settings</button>
          <button>Color</button>
          <HamburgerMenu />
        </Style.NavBtnsContainer>
          
     

      </Style.Container>

      )
    }
  }

  

/* <nav>


</nav> */

export default Header;