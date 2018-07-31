import React from 'react';
import styled, {css} from 'styled-components';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const CloseArrowSpan = styled.span`
  border-right: 2px solid ${ props => props.boardersRight}; 
  color:  ${ props => props.iconsIdleColor};
  flex-basis: 100%;
  height: 100%;
`;

const ArrowIcon = styled.i`
  font-size: 26px;
  margin-top: 12%;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-top: 2%;
  font-size: 16px;
`;

const LinkContainer = styled.span`
    /* margin-top: 1%; */
    height: 100%;

    &:hover {
      background-color: ${ props => props.backgroundActiveColor};
      
    }
`;

const ButtonElem = styled.span`

  color:  ${ props => props.iconsIdleColor};
  flex-basis: 100%;
  border-right: 1px solid ${ props => props.boardersRight};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;

  ${ props => props.isClicked && css`
    background-color: ${ props => props.backgroundActiveColor};
    color: ${ props => props.iconsPressedColor};
    border-color: ${ props => props.backgroundActiveColor};
` };
`;
// ${ props => props.iconsIdleColor}
const NavItems = (props) => {
  const menuRelativeLocation = "0";
  const aboutRelativeLocation = "250px";
  const featuresRelativeLocation = "500px";
  const buttons = {Menu: false, About: false, Features: false}
  buttons[props.buttonClicked] = true;

  const backgroundActiveColor = props.secondaryActiveColors.backgroundColor;
  const iconsPressedColor = props.secondaryActiveColors.iconsPressedColor;

  const iconsIdleColor = props.iconsIdleColor;
  const boardersRight = props.boardersRight;
  console.log("iconsIdleColor", iconsIdleColor);
  return (
    <React.Fragment> 

      <CloseArrowSpan iconsIdleColor={iconsIdleColor} boardersRight={boardersRight} onClick={props.closeMenu}>
        <ArrowIcon className={"fas fa-arrow-left"}></ArrowIcon>
      </CloseArrowSpan>
     
      <ButtonElem isClicked={buttons["Menu"]} data-btnname={"Menu"} data-location={menuRelativeLocation} 
      onClick={props.changeMenu} iconsIdleColor={iconsIdleColor} boardersRight={boardersRight}
      backgroundActiveColor={backgroundActiveColor} iconsPressedColor={iconsPressedColor} >
        <LinkContainer backgroundActiveColor={backgroundActiveColor} >
          Menu <Icon className={"fas fa-book-open"}></Icon>
        </LinkContainer>
      </ButtonElem>
  
      <ButtonElem isClicked={buttons["About"]} data-btnname={"About"} data-location={aboutRelativeLocation} onClick={props.changeMenu} 
        iconsIdleColor={iconsIdleColor} boardersRight={boardersRight} backgroundActiveColor={backgroundActiveColor} iconsPressedColor={iconsPressedColor}>
        <LinkContainer backgroundActiveColor={backgroundActiveColor}>
          About<Icon className={"fas fa-sitemap"}></Icon>
        </LinkContainer>
      </ButtonElem>

      <ButtonElem isClicked={buttons["Features"]} data-btnname={"Features"} data-location={featuresRelativeLocation} 
                 onClick={props.changeMenu}   iconsIdleColor={iconsIdleColor} boardersRight={boardersRight}
                 backgroundActiveColor={backgroundActiveColor} iconsPressedColor={iconsPressedColor}
                 >
        <LinkContainer backgroundActiveColor={backgroundActiveColor}>
          Features<Icon className={"fas fa-clipboard-list"}></Icon>
        </LinkContainer>
      </ButtonElem>

    </React.Fragment>
  )
}

export default NavItems;