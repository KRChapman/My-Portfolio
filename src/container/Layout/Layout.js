import React, { Component } from 'react';
import Menu from '../../container/Menu/Menu.js';
import Header from '../Header/Header.js';
import ContentBody from '../../components/MainContent/ContentBody/ContentBody.js';

import {
  withRouter ,
  Route,
  Switch,
 
} from 'react-router-dom';

import Projects from './../../components/MainContent/Projects/Projects';
import Contact from './../../components/MainContent/Contact/Contact';
import { defaultPrimary, defaultSecondary, 
        primaryTurquoise, primaryLightBlue, 
        secondaryTurquoise, secondaryBrown } from './../../variables/ColorVariables';

const defaults = {
  boxSpread: "5px",
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
    const initialStateColors = this.state.primaryColor;
    const initialSecondaryColorColors = this.state.secondaryColor;
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
      // primaryColor = changeChosenColor(secondaryColor, colorToChange);
      console.log("changedColor", changedColor);
      return { [colorData.key]: changedColor};
    });
    function changeChosenColor(colors, colorToChange, currentState) {
      const primaryKeys = Object.keys(colors);
      const filteredKeys = primaryKeys.filter(ele => {
        // console.log("primaryKeys[ele]", primaryKeys[ele]);
        return typeof colors[ele] === 'string';
      });
      const maxNumber = filteredKeys.length;
      const indexToChange = Math.floor(Math.random() * Math.floor(maxNumber));
       colors[filteredKeys[indexToChange]] = colorToChange;
    //  colors.textColorChange = (currentState.primaryColor.backgroundColor || colorToChange) === "rgba(114,133,137,0.45)" ? true : false;
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
   
        return initialColorValues.indexOf(ele) === -1 && typeof ele === 'string' && ele != "rgba(114,133,137,0.45)";
   
        })


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

      })
     
    }

  
  }

  render() {   
    console.log("backgroundpic={props.backgroundpic}", this.state.projectPath);
    // backgroundpic = { true}
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
              return <Projects  boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread}/>         
            }}/>
            <Route path="/contact" render={() => {
              return <Contact boxOpacicty={this.state.boxOpacicty} boxSpread={this.state.boxSpread} />
            }} />
            <Route path='/github' component={() => window.location.replace('https://github.com/KRChapman') } />
            <Route path='/linkedin' component={() => window.location.replace('https://www.linkedin.com/in/kyle-chapman-76969b167/')} />
          </Switch>      
        </ContentBody>
        
      </React.Fragment>

     )
  }
}


export default withRouter(Layout);


