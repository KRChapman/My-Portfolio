
import Style from './HeaderStyle.js'

import React, { Component } from 'react';
import HamburgerMenu from '../../components/SharedUI/HamburgerMenu/HamburgerMenu.js';
import HeaderBtns from './HeaderBtns/HeaderBtns.js';
  
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  toggleMenu() {


  }
  render() {
    
    

    //https://stackoverflow.com/questions/6089294/why-do-i-need-to-do-set-upstream-all-the-time
    // git push --set-upstream origin master
    //--set-upstream-to
    // A shortcut, which doesn't depend on remembering the syntax for git branch --set-upstream 1 is to do:
    // 
    // git push - u origin my_branch

    //https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches

    return (

      <Style.Container>
        <HamburgerMenu />
        <Style.Title>Full Stack Web Developer </Style.Title>
        <Style.NavBtnsContainer>
          <HeaderBtns > Custimize Settings  </HeaderBtns >
          <HeaderBtns >Color</HeaderBtns >
             
        </Style.NavBtnsContainer>
          
     

      </Style.Container>

      )
    }
  }

  

/* <nav>


</nav> */

export default Header;