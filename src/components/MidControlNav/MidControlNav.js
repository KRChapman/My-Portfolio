//backgroundColorMidNav: "#DE5939"
// color: #993F31;
// font - size: 14px;
// flex - basis: 100 %;
// border - right: 2px solid #cf4d2e;
import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems/NavItems'


const Container = styled.nav`
  width: 100%;
  height: 40px;
  background-color: ${ props => props.backgroundColor};
  display: flex;
  justify-content: space-around;
  text-align: center;


`;
  /* & > div {
    color:  ${ props => props.iconsIdleColor};
    font-size: 84px;
    flex-basis: 100%;
    border-right: 2px solid ${ props => props.boardersRight};;
    display: flex;
    flex-direction: column;
  } */

const MidControlNav = (props) => {
  //secondaryColor = { this.props.secondaryColor }

 // secondaryColor: { backgroundColorTop: "#2EB398", backgroundColorMidNav: "#279982", iconsIdleColor: "#1B6858", iconsPressedColor: "#56B596" },
  return (
    <Container backgroundColor={props.secondaryColor.backgroundColorMidNav}>
      <NavItems iconsIdleColor={props.secondaryColor.iconsIdleColor} 
                boardersRight={props.secondaryColor.boardersRight}
                secondaryActiveColors={props.secondaryColor.secondaryActiveColors}
                buttonClicked={props.buttonClicked} changeMenu={props.changeMenu} 
                closeMenu={props.closeMenu} />
    </Container>
  )
}

export default MidControlNav;