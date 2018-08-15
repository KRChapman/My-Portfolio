

// main background #273135;
//main color text #89949B;
import React from 'react';
import styled from 'styled-components';
import MenuSliderContainer from './MenuSliderContainer/MenuSliderContainer';
import About from '../About/About';
import Features from '../Features/Features';
import SideBottomMenu from '../SideBottomMenu/SideBottomMenu';

const Container = styled.div`
  width: 750px;
  display: flex;
  background-color: ${ props => props.backgroundColor};
  color: ${props => props.textColor};
  position: relative;
  right: ${props => props.slideLocation};
  z-index: ${props => props.theme.zindexLowest};
  transition: right ${props => props.theme.transitionTime} ease-out;
`;

const MenuWrapper = (props) => {

  const textColor = "#89949B";
  return (

    <Container backgroundColor={props.primaryColor.backgroundColor} textColor={textColor} 
      slideLocation={props.slideLocation}> 
      <MenuSliderContainer >     
        <SideBottomMenu textColor={textColor} showSubLinks={props.showSubLinks} 
          contentLinks={props.contentLinks} expandLinks={props.expandLinks} showProject={props.showProject} /> 
      </MenuSliderContainer >
      <MenuSliderContainer > 
        <About /> 
      </MenuSliderContainer >
      <MenuSliderContainer >
        <Features /> 
      </MenuSliderContainer >
    </Container>
  )
}

export default MenuWrapper;