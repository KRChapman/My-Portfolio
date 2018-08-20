
import React, { Component } from 'react';
import Styled from './MenuStyle';
import SideTopInfo from '../../components/SideTopInfo/SideTopInfo';

import MidControlNav from '../../components/MidControlNav/MidControlNav';
import MenuWrapper from '../../components/MenuWrapper/MenuWrapper';
import {
  faGithub,
  faLinkedin,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faFileAlt, faInfoCircle, faAddressCard, faListAlt, faLink, faCodeBranch, faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {
  withRouter,
} from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      slideLocation: 0,
      buttonClicked: "Menu",
      isDesktop: true,
      tabletSize: 700,
      

      contentLinks: {
        projects: { linkAttributes: this.createLink('Projects', faFileAlt,'/projects',  ), 
                    subLinks: null, 
                  },
        contact: { linkAttributes: this.createLink('Contact',faMobileAlt , '/contact'), 
                    subLinks: null,  
                 },
        myInfo: { linkAttributes: this.createLink('My Info', faInfoCircle, '#', true), 
                    subLinks: { aboutMe: this.createLink('About Me', faAddressCard, '/aboutme'), resume: this.createLink('Resume', faListAlt, '/resume', ),
                    
                              },
                showSubLinks: true, 
                },
  
        links: {
          linkAttributes: this.createLink('Links', faLink, '#', true),
          subLinks: {
            gitHub: this.createLink('GitHub', faGithub, '/github'), linkedin: this.createLink('Linkedin', faLinkedin , '/linkedin'),
            portfolioGitHub: this.createLink('Portfolio GitHub', faCodeBranch, '/portfoliogithub'),
          },
          showSubLinks: false, 
        },
        

        vanillaJavaScriptProjects: { linkAttributes: this.createLink(' Vannila javaScript Projects',  faJsSquare, '/vanillajavascript'), 
                                    subLinks: null,
                                  },
        hiddenProjects: {
          linkAttributes: this.createLink('Hidden Projects', faSearchPlus, '#', true),
          subLinks: this.hiddenProjectSubLinks(),
          showSubLinks: false,
        }

      },
 

     }

     

    
    this.handleChangeMenu = this.handleChangeMenu.bind(this);
    this.handleExpandLinks = this.handleExpandLinks.bind(this);
    this.hiddenProjectSubLinks = this.hiddenProjectSubLinks.bind(this);
    this.createLink = this.createLink.bind(this);
    this.updateWindow = this.updateWindow.bind(this);
  }

  componentDidMount() {
    this.updateWindow();
    window.addEventListener("resize", this.updateWindow);
  }

  componentDidUpdate(prevProps, prevState) {
    
    if ((prevProps.hiddenProjects !== this.props.hiddenProjects || this.props.projectPath !== prevProps.projectPath)){
      const route = this.props.projectPath === '/' ? '/projects' : this.props.projectPath;

      this.setState(currentState => {
        const contentLinks = {...currentState.contentLinks}
        const subLinks = this.hiddenProjectSubLinks(route);
        const hiddenProjects = {...contentLinks.hiddenProjects}
        hiddenProjects.subLinks = subLinks;
        contentLinks.hiddenProjects = hiddenProjects;
        return {
          contentLinks
        }
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindow);
  }

  updateWindow(){
    const tabletSize = this.state.tabletSize;
    this.setState({ isDesktop: window.innerWidth > tabletSize});
  }


  hiddenProjectSubLinks(route) {
    let subLinks = null;
    this.props.hiddenProjects.forEach(ele => {
      if (route === ele.route) {
        subLinks = subLinks == null ? {} : subLinks;
        
        subLinks[ele.name] = this.createLink(ele.name, faSearchPlus, ele.route);

      }


    })
    return subLinks;
  }

  createLink(title, icon, to, expandFunction = false) {


    return {
      title,
      icon,
      to,
      expandFunction,
    }

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
        <MenuWrapper primaryColor={this.props.primaryColor} showSubLinks={this.state.showSubLinks} showProject={this.props.showProject}
          contentLinks={this.state.contentLinks}  expandLinks={this.handleExpandLinks}  slideLocation={this.state.slideLocation} 
          closeMenu={this.props.closeMenu} isDesktop={this.state.isDesktop}/>
      </Styled.Container >
     )
  }
}
 
export default withRouter(Menu);