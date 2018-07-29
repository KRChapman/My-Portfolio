
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
      buttonClicked: "Menu",
      showSubLinks: true,

      contentLinks: {
        projects: { linkAttributes: createLink('Projects', 'fas fa-file-alt','/projects',  ), 
                    subLinks: null, 
                  },
        contact: { linkAttributes: createLink('Contact', 'fas fa-mobile-alt', '/contact'), 
                    subLinks: null,  
                 },
        myInfo: { linkAttributes: createLink('My Info', 'fas fa-info-circle', '#', true), 
                    subLinks: { aboutMe: createLink('About Me', 'fas fa-address-card', '/aboutme'), resume: createLink('Resume', 'far fa-list-alt', '/resume', ),
                                gitHub: createLink('GitHub', 'fab fa-github', 'https://github.com/KRChapman')
                              } 
                },
        

        vanillaJavaScriptProjects: { linkAttributes: createLink(' Vannila javaScript Projects', 'fab fa-js-square', '/vanillajavascript'), 
                                    subLinks: null,
                                  },

      },

     }

     function createLink(title, icon, to , expandFunction = false){
     

        return {
          title,
          icon,
          to,
          expandFunction,
        }

     }

    this.handleChangeMenu = this.handleChangeMenu.bind(this);
    this.handleExpandLinks = this.handleExpandLinks.bind(this);

  }

  handleChangeMenu(e){
    const slideLocation = e.currentTarget.dataset.location;
    const buttonClicked = e.currentTarget.dataset.btnname;

    this.setState({ slideLocation, buttonClicked});
  }

  handleExpandLinks(e){
    console.log('ee', e);
    const showSubLinks = !this.state.showSubLinks;
    this.setState({ showSubLinks });
  }

 

  render() { 

    return ( 
      <Styled.Container mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <SideTopInfo />
        <MidControlNav buttonClicked={this.state.buttonClicked} changeMenu={this.handleChangeMenu} closeMenu={this.props.closeMenu}/>
        <MenuWrapper showSubLinks={this.state.showSubLinks} contentLinks={this.state.contentLinks}  expandLinks={this.handleExpandLinks}  slideLocation={this.state.slideLocation}/>
      </Styled.Container >
     )
  }
}
 
export default Menu;