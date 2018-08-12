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

// import Resume from '../../components/MainContent/Resume/Resume.js';
// import AboutMe from '../../components/MainContent/AboutMe/AboutMe.js';
// import VanillaJavascript from '../../components/MainContent/VanillaJavascript/VanillaJavascript.js';
// import Projects from './../../components/MainContent/Projects/Projects';
// import Contact from './../../components/MainContent/Contact/Contact';

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



const defaults = {
  boxSpread: "10px",
  boxOpacicty: "0.45",
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

      projectsInfo:{
        voteNow: createProjectsInfo("Vote-Now-Omatic", "voteNow", "https://github.com/KRChapman/VotingApp",
          "https://protected-fjord-13167.herokuapp.com/"),
        wikiResource: createProjectsInfo("MyWiki Saver", "wikiResource", "https://github.com/KRChapman/personalWiki", 
          "https://mywiki-1306.appspot.com/"),
        conway: createProjectsInfo("Conway's Game Of Life", "conway", "https://github.com/KRChapman/GameOfLife", ""),
        simon: createProjectsInfo("Simon Game", "simon", "https://github.com/KRChapman/FCCProjects/tree/master/simonGame", "http://simongame-kc.surge.sh/")
      }
      
     }

    function createProjectsInfo(header, iconsInfo, githubLink, projectLink){
      let iconsToDisplay = [];
      let textInfo = "";

      switch (iconsInfo) {
        case ('voteNow'):
          iconsToDisplay = [icons.mongoDB, icons.node, icons.javaScript, icons.sass]
          textInfo = "Full stack vanilla Javascript application. Log in and create polls for other people around the world to vote on and chart the results."
          break;
        case ('wikiResource'):
          iconsToDisplay = [icons.python, icons.javaScript, icons.gql]
          textInfo = "Full stack Python application. Log in and create pages and posts. Save links and edit or delete your content after posting."
          break;
        case ('conway'):
          iconsToDisplay = [icons.react, icons.sass]
          textInfo = "A React application visually representing my algorithm to display Conway's game of life."
          break;
        case ('simon'):
          iconsToDisplay = [icons.javaScript, icons.sass]
          textInfo = "Vanilla Javascript Project that is a replication of the game simon says it even needs tobe turned on"
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

      }
    }

    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    this.closeMenuHandler = this.closeMenuHandler.bind(this);
    this.selectColorHandler = this.selectColorHandler.bind(this);
    this.changeBoxShadowHandler = this.changeBoxShadowHandler.bind(this);
    this.saveToLocalStorageHandler = this.saveToLocalStorageHandler.bind(this);
    this.resetToDefaultsHandler = this.resetToDefaultsHandler.bind(this);
    this.selectRandomColorHandler = this.selectRandomColorHandler.bind(this);
  }

  componentDidMount() {
    const pathName = this.props.location.pathname;
    this.updateStateWithLocalStorage();
    this.updatePicture(pathName);
  }

  componentDidUpdate(prevProps) {

    if(this.props.location !== prevProps.location){
      const pathName = this.props.location.pathname;
      this.updatePicture(pathName);
    }
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
      // save to localStorage
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
    console.log("possibleColors", colors);

    const maxNumber = colors.length;
    const colorToChange = colors[Math.floor(Math.random() * Math.floor(maxNumber))];

    this.setState(currentState => {
      let newObj = { ...currentState.primaryColor };
      let colorData = name === "primary" ? { key: "primaryColor", obj: newObj} : 
                                            { key: "secondaryColor", obj: { ...currentState.secondaryColor }};
    
      
      let changedColor = changeChosenColor(colorData.obj, colorToChange, currentState);
      return { [colorData.key]: changedColor};
    });
    function changeChosenColor(colors, colorToChange, currentState) {
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
        console.log("valuesArrayvaluesArray", colorsSecondary[key]);
        let values = Object.values(colorsSecondary[key]);
        valuesArray = [...valuesArray, ...values]  
      }

      return valuesArray.filter(ele => {
        return initialColorValues.indexOf(ele) === -1 && typeof ele !== 'object';
      });     
    }
  }

  render() {   

    return ( 
      <React.Fragment>      
        <Menu primaryColor={this.state.primaryColor} secondaryColor={this.state.secondaryColor} 
          mediaQuery={this.state.mediaQuery} closeMenu={this.closeMenuHandler} showToggleMenu={this.state.isShowMenu}/>
        <Header boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread} changeBoxShadow={this.changeBoxShadowHandler} 
          selectColor={this.selectColorHandler} primaryColor={this.state.primaryColor} saveToLocalStorage={this.saveToLocalStorageHandler} 
          mediaQuery={this.state.mediaQuery} toggleMenu={this.toggleMenuHandler} showToggleMenu={this.state.isShowMenu} 
          resetToDefaults={this.resetToDefaultsHandler} selectRandomColor={this.selectRandomColorHandler} /> 
        <ContentBody backgroundpic={this.state.projectPath} mediaQuery={this.state.mediaQuery} showToggleMenu={this.state.isShowMenu}>
          <Switch>
            <Route path='/projects'  render={() => {
              return <AsyncProjects projectsInfo={this.state.projectsInfo}  boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread}/>         
            }}/>
            <Route path="/contact" render={() => {
              return <AsyncContact  />
            }} />
            <Route path="/resume" render={() => {
              return <AsyncResume boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread} />
            }} />
            <Route path="/aboutme" render={() => {
              return <AsyncAboutMe wikiResourceProject={this.state.projectsInfo.wikiResource} boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread}/>
            }} />
            <Route path="/vanillajavascript" render={() => {
              return <AsyncVanillaJavascript projectsInfo={this.state.projectsInfo} boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread} />
            }} />     
                
            <Route path='/github' component={() => window.location.replace('https://github.com/KRChapman') } />
            <Route path='/linkedin' component={() => window.location.replace('https://www.linkedin.com/in/kyle-chapman-76969b167/')} />
            <Route path='/portfoliogithub' component={() => window.location.replace('https://github.com/KRChapman/My-Portfolio')} />
          </Switch>      
        </ContentBody>        
      </React.Fragment>
     )
  }
}

export default withRouter(Layout);


