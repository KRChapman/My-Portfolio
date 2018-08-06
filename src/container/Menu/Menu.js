
import React, { Component } from 'react';
import Styled from './MenuStyle';
import SideTopInfo from '../../components/SideTopInfo/SideTopInfo';

import MidControlNav from '../../components/MidControlNav/MidControlNav';
import MenuWrapper from '../../components/MenuWrapper/MenuWrapper';
import {
  faTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
  faLinkedin,
  faJsSquare,
 
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faFileAlt, faInfoCircle, faAddressCard, faListAlt, faLink, faCodeBranch} from '@fortawesome/free-solid-svg-icons';
// 'fas fa-file-alt'
//'fas fa-info-circle'
//'fas fa-mobile-alt'
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      slideLocation: 0,
      buttonClicked: "Menu",
      

      contentLinks: {
        projects: { linkAttributes: createLink('Projects', faFileAlt,'/projects',  ), 
                    subLinks: null, 
                  },
        contact: { linkAttributes: createLink('Contact',faMobileAlt , '/contact'), 
                    subLinks: null,  
                 },
        myInfo: { linkAttributes: createLink('My Info', faInfoCircle, '#', true), 
                    subLinks: { aboutMe: createLink('About Me', faAddressCard, '/aboutme'), resume: createLink('Resume', faListAlt, '/resume', ),
                    
                              },
                showSubLinks: true, 
                },
  
        links: {
          linkAttributes: createLink('Links', faLink, '#', true),
          subLinks: {
            gitHub: createLink('GitHub', faGithub, '/github'), linkedin: createLink('Linkedin', faLinkedin , '/linkedin'),
            portfolioGitHub: createLink('Portfolio GitHub', faCodeBranch, '/portfoliogithub'),
          },
          showSubLinks: false, 
        },
        

        vanillaJavaScriptProjects: { linkAttributes: createLink(' Vannila javaScript Projects',  faJsSquare, '/vanillajavascript'), 
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

  handleExpandLinks(name){
 
    this.setState(currentState => {
      const contentObj = { ...currentState.contentLinks }
      contentObj[name].showSubLinks = !contentObj[name].showSubLinks;
      return { contentLinks: contentObj}
    });
  }

 

  render() { 

    return ( 
      <Styled.Container backgroundColor={this.props.primaryColor.backgroundColor}
        mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <SideTopInfo secondaryColor={this.props.secondaryColor} />
        <MidControlNav secondaryColor={this.props.secondaryColor} buttonClicked={this.state.buttonClicked}
          changeMenu={this.handleChangeMenu} closeMenu={this.props.closeMenu}/>
        <MenuWrapper primaryColor={this.props.primaryColor} showSubLinks={this.state.showSubLinks} 
          contentLinks={this.state.contentLinks}  expandLinks={this.handleExpandLinks}  slideLocation={this.state.slideLocation}/>
      </Styled.Container >
     )
  }
}
 
export default Menu;