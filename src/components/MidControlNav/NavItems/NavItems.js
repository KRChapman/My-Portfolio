import React from 'react';
import styled, {css} from 'styled-components';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBookOpen, faSitemap, faClipboardList } from '@fortawesome/free-solid-svg-icons'

const CloseArrowSpan = styled.span`
  border-right: 2px solid ${ props => props.boardersRight}; 
  color:  ${ props => props.iconsIdleColor};
  flex-basis: 100%;
  height: 100%;
  cursor: pointer;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 26px;
  margin-top: 12%;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
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

  return (
    <React.Fragment> 

      <CloseArrowSpan iconsIdleColor={iconsIdleColor} boardersRight={boardersRight} onClick={props.closeMenu}>
        <ArrowIcon icon={faArrowLeft}></ArrowIcon>
      </CloseArrowSpan>
     
      <ButtonElem isClicked={buttons["Menu"]} data-btnname={"Menu"} data-location={menuRelativeLocation} 
      onClick={props.changeMenu} iconsIdleColor={iconsIdleColor} boardersRight={boardersRight}
      backgroundActiveColor={backgroundActiveColor} iconsPressedColor={iconsPressedColor} >
        <LinkContainer backgroundActiveColor={backgroundActiveColor} >
          Menu <Icon icon={faBookOpen}></Icon>
        </LinkContainer>
      </ButtonElem>
  
      <ButtonElem isClicked={buttons["About"]} data-btnname={"About"} data-location={aboutRelativeLocation} onClick={props.changeMenu} 
        iconsIdleColor={iconsIdleColor} boardersRight={boardersRight} backgroundActiveColor={backgroundActiveColor} iconsPressedColor={iconsPressedColor}>
        <LinkContainer backgroundActiveColor={backgroundActiveColor}>
          About<Icon icon={faSitemap}></Icon>
        </LinkContainer>
      </ButtonElem>

      <ButtonElem isClicked={buttons["Features"]} data-btnname={"Features"} data-location={featuresRelativeLocation} 
                 onClick={props.changeMenu}   iconsIdleColor={iconsIdleColor} boardersRight={boardersRight}
                 backgroundActiveColor={backgroundActiveColor} iconsPressedColor={iconsPressedColor}
                 >
        <LinkContainer backgroundActiveColor={backgroundActiveColor}>
          Features<Icon icon={faClipboardList}></Icon>
        </LinkContainer>
      </ButtonElem>

    </React.Fragment>
  )
}

export default NavItems;