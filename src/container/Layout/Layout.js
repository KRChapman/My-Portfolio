import React, { Component } from 'react';
import Menu from '../../container/Menu/Menu.js';
import Header from '../Header/Header.js';
import ContentBody from '../../components/MainContent/ContentBody/ContentBody.js';
import {
  withRouter ,
  Route,
  Switch,
 
} from 'react-router-dom';
import { defaultPrimary, defaultSecondary, 
        primaryTurquoise, primaryLightBlue, 
        secondaryTurquoise, secondaryBrown } from './../../variables/ColorVariables';
import {
  icons
} from './../../variables/IconVariables.js';

import asyncComponent from './../../hoc/asyncComponent';
const AsyncContact = asyncComponent(() => {
  return import('./../../components/MainContent/Contact/Contact');
});
const AsyncProjects = asyncComponent(() => {
  return import('./../../components/MainContent/Projects/Projects');
});
const AsyncAboutMe = asyncComponent(() => {
  return import('../../components/MainContent/AboutMe/AboutMe.js');
});
const AsyncResume = asyncComponent(() => {
  return import('../../components/MainContent/Resume/Resume.js');
})
const AsyncVanillaJavascript = asyncComponent(() => {
  return import('../../components/MainContent/VanillaJavascript/VanillaJavascript.js');
});

// used for reseting back to default in resetToDefaultsHandler()
const defaults = {
  boxSpread: "6px",
  boxOpacicty: "0.4",
  primaryColor: defaultPrimary,
  secondaryColor: defaultSecondary,

  isShowMenu: false,
  mediaQuery: "850px"
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      boxSpread: defaults.boxSpread,
      boxOpacicty: defaults.boxOpacicty,
      primaryColor: defaults.primaryColor,
      secondaryColor: defaults.secondaryColor,
  
      isShowMenu: defaults.isShowMenu,
      mediaQuery: defaults.mediaQuery,
      projectPath: "",
      hiddenProjects: [],
      projectOff: {name: "", opacity: 0},

      isDesktop: true,
      tabletSize: 700,

      projectsInfo:{
        voteNow: createProjectsInfo("Vote-Now-Omatic", "voteNow", "https://github.com/KRChapman/VotingApp",
          "https://protected-fjord-13167.herokuapp.com/"),
        wikiResource: createProjectsInfo("MyWiki Saver", "wikiResource", "https://github.com/KRChapman/personalWiki", 
          "https://mywiki-1306.appspot.com/"),
        conway: createProjectsInfo("Conway's Game Of Life", "conway", "https://github.com/KRChapman/GameOfLife", "https://krchapman.github.io/GameOfLife/"),
        simon: createProjectsInfo("Simon Game", "simon", "https://github.com/KRChapman/FCCProjects/tree/master/simonGame", "http://simongame-kc.surge.sh/")
      },     
    }

    function createProjectsInfo(header, iconsInfo, githubLink, projectLink){
      let iconsToDisplay = [];
      let textInfo = "";
      let additionalStyle = { containerStyle : null, pictureStyle : null};

      switch (iconsInfo) {
        case ('voteNow'):
          iconsToDisplay = [icons.mongoDB, icons.node, icons.javaScript, icons.sass]
          textInfo = "Full stack vanilla JavaScript application. Log in and create polls for other people around the world to vote on and chart the results."
          additionalStyle = { containerStyle: null, pictureStyle: { marginLeft: "-40px" } };
          break;
        case ('wikiResource'):
          iconsToDisplay = [icons.python, icons.javaScript, icons.gql]
          textInfo = "Full stack Python application. Log in and generate pages and posts. Save links and edit or delete content."
          additionalStyle = { containerStyle: { border: "1px solid black"}, pictureStyle: { marginLeft: "-10px" }};
          break;
        case ('conway'):
          iconsToDisplay = [icons.react, icons.sass]
          textInfo = "React application using Sass that is a visual representation of my algorithm to display Conway's Game of Life."
          additionalStyle = { containerStyle: null, pictureStyle: { marginLeft: "-16px" } };
          break;
        case ('simon'):
          iconsToDisplay = [icons.javaScript, icons.sass]
          textInfo = "Vanilla Javascript Project that is a replication of the game simon says it even needs to be turned on."        
          break;
        default:
          iconsToDisplay = [];
          textInfo = ""
      }

      return{
        header,
        iconsInfo: iconsToDisplay,    
        githubLink,
        projectLink,
        textInfo,
        additionalStyle,
      }
    }

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    this.closeMenuHandler = this.closeMenuHandler.bind(this);
    this.selectColorHandler = this.selectColorHandler.bind(this);
    this.changeBoxShadowHandler = this.changeBoxShadowHandler.bind(this);
    this.saveToLocalStorageHandler = this.saveToLocalStorageHandler.bind(this);
    this.resetToDefaultsHandler = this.resetToDefaultsHandler.bind(this);
    this.selectRandomColorHandler = this.selectRandomColorHandler.bind(this);
    this.hideProjectHandler = this.hideProjectHandler.bind(this);
    this.showProjectHandler = this.showProjectHandler.bind(this);
    this.updateWindow = this.updateWindow.bind(this);
  }

  componentDidMount() {
    const pathName = this.props.location.pathname;
    this.updateStateWithLocalStorage();
    this.updatePicture(pathName);

    this.updateWindow();
    window.addEventListener("resize", this.updateWindow);
  }

  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location){
      const pathName = this.props.location.pathname;

      this.updatePicture(pathName);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindow);
  }

  updateWindow() {
    const tabletSize = this.state.tabletSize;
    this.setState({ isDesktop: window.innerWidth > tabletSize });
  }

  updatePicture(pathName){
    this.setState({ projectPath: pathName });
  }

  updateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)
        && (key === "boxSpread" || key === "boxOpacicty" || key === "primaryColor"
        || key === "secondaryColor")) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveToLocalStorageHandler() {
    for (let key in this.state) {
      if (key !== "mediaQuery" && key !== "isShowMenu")
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  resetToDefaultsHandler(){
    const wantedDefaults = {
      boxSpread: defaults.boxSpread,
      boxOpacicty: defaults.boxOpacicty,
      primaryColor: defaults.primaryColor,
      secondaryColor: defaults.secondaryColor,
    }
    localStorage.clear();
    this.setState({ ...wantedDefaults });

  }

  toggleMenuHandler() {
    let isShowMenu = !this.state.isShowMenu;
    this.setState({ isShowMenu, mediaQuery: "850px"});
  }

  closeMenuHandler() {
    this.setState({ isShowMenu: false, mediaQuery: "9850px"});
  }

  selectColorHandler(color) {
    const colorsPrimary = {
      defaultPrimary,
      primaryTurquoise, primaryLightBlue,
     }
    const colorsSecondary ={
      defaultSecondary,
       secondaryTurquoise,
        secondaryBrown
    }
 
    this.setState(currentState => {
      const newPrimaryColor = color in colorsPrimary ?   colorsPrimary[color] : currentState.primaryColor;
      const newSecondaryColor = color in colorsSecondary ? colorsSecondary[color]  : currentState.secondaryColor;
     
      return { primaryColor: newPrimaryColor, secondaryColor: newSecondaryColor}
    });  
  }

  changeBoxShadowHandler(e) {
    const spread = e.currentTarget.name;
    const opacity = e.currentTarget.name;
    const value = e.currentTarget.value;

    this.setState(currentState => {
      const boxSpread = spread === 'spread' ? value + 'px' : currentState.boxSpread;
      const boxOpacicty = opacity === 'opacity' ? value / 100 : currentState.boxOpacicty;
      return { boxSpread, boxOpacicty};
    });
  }

  selectRandomColorHandler(name) {
    const initialStateColors = {...this.state.primaryColor};
    const initialSecondaryColorColors = {...this.state.secondaryColor};
    const colorsPrimary = {
      defaultPrimary,
      primaryTurquoise, primaryLightBlue,
    }
    const colorsSecondary = {
      defaultSecondary,
      secondaryTurquoise,
      secondaryBrown
    }
    const colors = name === "primary" ? createPrimaryArray(colorsPrimary, initialStateColors) : createSecondaryArray(colorsSecondary, initialSecondaryColorColors);

    const maxNumber = colors.length;
    const colorToChange = colors[Math.floor(Math.random() * Math.floor(maxNumber))];

    this.setState(currentState => {
      let primaryColors = { ...currentState.primaryColor };
      let colorData = name === "primary" ? { name: "primaryColor", colors: primaryColors} : 
                                            { name: "secondaryColor", colors: { ...currentState.secondaryColor }};
      let changedColor = changeChosenColor(colorData.colors, colorToChange);
      return { [colorData.name]: changedColor};
    });
    function changeChosenColor(colors, colorToChange) {
      const primaryKeys = Object.keys(colors);
      const filteredKeys = primaryKeys.filter(ele => {
        return typeof colors[ele] === 'string';
      });
      const maxNumber = filteredKeys.length;
      const indexToChange = Math.floor(Math.random() * Math.floor(maxNumber));
      colors[filteredKeys[indexToChange]] = colorToChange;

      return colors;
    }
    
    function createPrimaryArray(colorsPrimary, initialColors){  
      const initialColorValues = Object.values(initialColors);
      let valuesArray = [];

      for (const key in colorsPrimary) {
        let values = Object.values(colorsPrimary[key]); 
        valuesArray = [...valuesArray, ...values]
      }

      return valuesArray.filter(ele => {
        return initialColorValues.indexOf(ele) === -1 && typeof ele === 'string' ; 
      });

    }
    function createSecondaryArray(colorsSecondary, initialSecondaryColorColors){
      const initialColorValues = Object.values(initialSecondaryColorColors);
      let valuesArray = [];

      for (const key in colorsSecondary) {
        let values = Object.values(colorsSecondary[key]);
        valuesArray = [...valuesArray, ...values]  
      }

      return valuesArray.filter(ele => {
        return initialColorValues.indexOf(ele) === -1 && typeof ele !== 'object';
      });     
    }
  }

  hideProjectHandler(projectRoute, projectHeader, zoomed) {
    let header = projectHeader;
    let route = projectRoute;
    if(zoomed === 1 ){
      this.setState(currentState => {
        let hiddenProjects = [...currentState.hiddenProjects];
        const projectOff = { ...currentState.projectOff }
        for (const key in currentState.projectsInfo) {
          if (currentState.projectsInfo[key].header === header) {
            hiddenProjects = hiddenProjects.concat({ route, name: key });;
          }
        }

        return {
          projectOff,
          hiddenProjects
        }
      });


    }
    else{
      let projectsInfo = {...this.state.projectsInfo}
      let projectsKeys = Object.keys(this.state.projectsInfo);
      let projectName;
      for (const key of projectsKeys) {

        if (header === projectsInfo[key].header ){

          projectName = key;
        }
      }
      this.showProjectHandler(projectRoute, projectName);
    }

  }

  showProjectHandler(projectRoute, projectName){

    let name = projectName;
    let route = projectRoute;

    this.setState(currentState => {
      let hiddenProjects = [...currentState.hiddenProjects];

      hiddenProjects = hiddenProjects.filter(ele => {;
        return ele.name !== name || ele.route !== route;
      })
      return {
        hiddenProjects
      }
    });
  }
 
  render() {   
   
    return ( 
      <React.Fragment>      
        <Menu primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} projectPath={this.state.projectPath} hiddenProjects={this.state.hiddenProjects}
          mediaQuery={this.state.mediaQuery} closeMenu={this.closeMenuHandler} showToggleMenu={this.state.isShowMenu} showProject={this.showProjectHandler} isDesktop={this.state.isDesktop}/>
        <Header boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread} changeBoxShadow={this.changeBoxShadowHandler} 
          selectColor={this.selectColorHandler} primaryColor={this.state.primaryColor} saveToLocalStorage={this.saveToLocalStorageHandler} 
          mediaQuery={this.state.mediaQuery} toggleMenu={this.toggleMenuHandler} showToggleMenu={this.state.isShowMenu} 
          resetToDefaults={this.resetToDefaultsHandler} selectRandomColor={this.selectRandomColorHandler}  /> 
        <ContentBody backgroundpic={this.state.projectPath} mediaQuery={this.state.mediaQuery} showToggleMenu={this.state.isShowMenu}>
          <Switch>
            <Route exact path='/' render={() => {
              return <AsyncProjects projectsInfo={this.state.projectsInfo} boxOpacicty={this.state.boxOpacicty}
                boxSpread={this.state.boxSpread} hideProject={this.hideProjectHandler} isDesktop={this.state.isDesktop}
                projectOff={this.state.projectOff} hiddenProjects={this.state.hiddenProjects} route={'/projects'} />
            }} />
            <Route path='/projects'  render={() => {
              return <AsyncProjects projectsInfo={this.state.projectsInfo}  boxOpacicty={this.state.boxOpacicty} 
                        boxSpread={this.state.boxSpread} hideProject={this.hideProjectHandler} isDesktop={this.state.isDesktop}
                        projectOff={this.state.projectOff} hiddenProjects={this.state.hiddenProjects} route={'/projects'}/>         
            }}/>
            <Route path="/contact" render={() => {
              return <AsyncContact  />
            }} />
            <Route path="/resume" render={() => {
              return <AsyncResume boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread} />
            }} />
            <Route path="/aboutme" render={() => {
              return <AsyncAboutMe projectsInfo={this.state.projectsInfo} isDesktop={this.state.isDesktop} boxOpacicty={this.state.boxOpacicty} 
                        boxSpread={this.state.boxSpread} route={"/aboutme"}  hideProject={this.hideProjectHandler}
                        hiddenProjects={this.state.hiddenProjects} projectOpacity={this.state.hiddenProjectsOpacity}/>
            }} />
            <Route path="/vanillajavascript" render={() => {
              return <AsyncVanillaJavascript projectsInfo={this.state.projectsInfo} boxOpacicty={this.state.boxOpacicty} 
                boxSpread={this.state.boxSpread} route={"/vanillajavascript"}  hideProject={this.hideProjectHandler}
                hiddenProjects={this.state.hiddenProjects} projectOpacity={this.state.hiddenProjectsOpacity}/>
            }} />     
                
            <Route path='/github' render={() => window.location.replace('https://github.com/KRChapman') } />
            <Route path='/linkedin' render={() => window.location.replace('https://www.linkedin.com/in/kyle-chapman-76969b167/')} />
            <Route path='/portfoliogithub' render={() => window.location.replace('https://github.com/KRChapman/My-Portfolio')} />
          </Switch>      
        </ContentBody>        
      </React.Fragment>
     )
  }
}

export default withRouter(Layout);


