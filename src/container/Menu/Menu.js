
import React, { Component } from 'react';
import { Container } from './MenuStyle';
import SideTopInfo from '../../components/SideTopInfo/SideTopInfo';

import MidControlNav from '../../components/MidControlNav/MidControlNav';
import MenuWrapper from '../../components/MenuWrapper/MenuWrapper';
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faFileAlt, faInfoCircle, faAddressCard, faListAlt, faLink, faCodeBranch, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import {
  withRouter,
} from 'react-router-dom';


//

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideLocation: 0,
      buttonClicked: "Menu",
      linkAndListHeight: 48,

      contentLinks: {
        projects: {
          linkAttributes: this.createLink('Projects', faFileAlt, '/projects', ),
          subLinks: null,
        },
        myInfo: {
          linkAttributes: this.createLink('My Info', faInfoCircle, '#', true),
          subLinks: {
            aboutMe: this.createLink('About Me', faAddressCard, '/aboutme'), 
            resume: this.createLink('Resume', faListAlt, '/resume', ),
          },
          showSubLinks: false,

        },
        links: {
          linkAttributes: this.createLink('Links', faLink, '#', true),
          subLinks: {
            portfolioGitHub: this.createLink('Portfolio Code', faCodeBranch, '/portfoliogithub'), 
            linkedin: this.createLink('Linkedin', faLinkedin, '/linkedin'),
            gitHub: this.createLink('GitHub', faGithub, '/github'),
          },
          showSubLinks: true,
        },
        contact: {
          linkAttributes: this.createLink('Contact', faMobileAlt, '/contact'),
          subLinks: null,
        },    
        hiddenProjects:
        {
          linkAttributes: this.createLink('Zoomed Projects in Section', faSearchPlus, '#', true),
          subLinks: this.hiddenProjectSubLinks(),
          showSubLinks: false,
        }
      },
    }
    this.handleChangeMenu = this.handleChangeMenu.bind(this);
    this.handleExpandLinks = this.handleExpandLinks.bind(this);
    this.hiddenProjectSubLinks = this.hiddenProjectSubLinks.bind(this);
    this.createLink = this.createLink.bind(this);
    
  }

  componentDidUpdate(prevProps, prevState) {

    if ((prevProps.hiddenProjects !== this.props.hiddenProjects || this.props.projectPath !== prevProps.projectPath)) {
      const route = this.props.projectPath === '/' ? '/projects' : this.props.projectPath;

      this.setState(currentState => {
        const contentLinks = { ...currentState.contentLinks }
        const subLinks = this.hiddenProjectSubLinks(route);
        const hiddenProjects = { ...contentLinks.hiddenProjects }
        hiddenProjects.subLinks = subLinks;
        contentLinks.hiddenProjects = hiddenProjects;
        return {
          contentLinks
        }
      });
    }
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

  handleChangeMenu(e) {
    const slideLocation = e.currentTarget.dataset.location;
    const buttonClicked = e.currentTarget.dataset.btnname;
    this.setState({ slideLocation, buttonClicked });
  }

  handleExpandLinks(name) {
    this.setState(currentState => {
      const contentObj = { ...currentState.contentLinks }
      contentObj[name].showSubLinks = !contentObj[name].showSubLinks;
      return { contentLinks: contentObj }
    });
  }

  render() {
    const route = this.props.projectPath === '/' ? '/projects' : this.props.projectPath;
    return (
      <Container backgroundColor={this.props.primaryColor.backgroundColor}
        mediaQuery={this.props.mediaQuery} showToggleMenu={this.props.showToggleMenu}>
        <SideTopInfo secondaryColor={this.props.secondaryColor} />
        <MidControlNav secondaryColor={this.props.secondaryColor} buttonClicked={this.state.buttonClicked}
          changeMenu={this.handleChangeMenu} closeMenu={this.props.closeMenu} />
        <MenuWrapper primaryColor={this.props.primaryColor} showSubLinks={this.state.showSubLinks} projectPath={route} showProject={this.props.showProject}
          contentLinks={this.state.contentLinks} expandLinks={this.handleExpandLinks} slideLocation={this.state.slideLocation} height={this.state.linkAndListHeight}
          closeMenu={this.props.closeMenu} isDesktop={this.props.isDesktop} hiddenProjects={this.props.hiddenProjects}/>
      </Container >
    )
  }
}

export default withRouter(Menu);