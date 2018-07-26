import React from 'react';
import styled from 'styled-components';
import MenuSliderContainer from './MenuSliderContainer/MenuSliderContainer';
import About from '../About/About';
import Features from '../Features/Features';
import SideBottomMenu from '../SideBottomMenu/SideBottomMenu';

const Container = styled.div`
  width: 750px;
  display: flex;
  background-color: green;
  position: relative;
  right: ${props => props.slideLocation};
  z-index: ${props => props.theme.zindexLowest};

  transition: right ${props => props.theme.transitionTime} ease-out;
`;

const MenuWrapper = (props) => {


  return (

    <Container slideLocation={props.slideLocation}> 
      <MenuSliderContainer >     
        <SideBottomMenu showSubLinks={props.showSubLinks} contentLinks={props.contentLinks} expandLinks={props.expandLinks} /> 
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