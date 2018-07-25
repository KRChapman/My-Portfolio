import React from 'react';
import styled, {css} from 'styled-components';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const CloseArrowSpan = styled.span`
  border-right: 2px solid #cf4d2e; 
  color:  #993F31;
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
    margin-top: 1%;
    height: 100%;

    &:hover {
      background-color: #ba4e3b ;
    }
`;

const ButtonElem = styled.span`
  color:  #993F31;
  flex-basis: 100%;
  border-right: 2px solid #cf4d2e;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;

  ${ props => props.isClicked && css`
    background-color: #ba4e3b;
    color: #FA7252;
` };
 
`;

const NavItems = (props) => {
  const menuRelativeLocation = "0";
  const aboutRelativeLocation = "250px";
  const featuresRelativeLocation = "500px";

  const buttons = {Menu: false, About: false, Features: false}
  buttons[props.buttonClicked] = true;

  return (
    <React.Fragment> 

      <CloseArrowSpan onClick={props.closeMenu}>
        <ArrowIcon className={"fas fa-arrow-left"}></ArrowIcon>
      </CloseArrowSpan>
     
      <ButtonElem isClicked={buttons["Menu"]} data-btnname={"Menu"} data-location={menuRelativeLocation} onClick={props.changeMenu} >
        <LinkContainer>
          Menu <Icon className={"fas fa-book-open"}></Icon>
        </LinkContainer>
      </ButtonElem>
  
      <ButtonElem isClicked={buttons["About"]} data-btnname={"About"} data-location={aboutRelativeLocation} onClick={props.changeMenu}  >
        <LinkContainer>
          About<Icon className={"fas fa-sitemap"}></Icon>
        </LinkContainer>
      </ButtonElem>

      <ButtonElem isClicked={buttons["Features"]} data-btnname={"Features"} data-location={featuresRelativeLocation} onClick={props.changeMenu} >
        <LinkContainer>
          Features<Icon className={"fas fa-clipboard-list"}></Icon>
        </LinkContainer>
      </ButtonElem>

    </React.Fragment>
  )
}

export default NavItems;