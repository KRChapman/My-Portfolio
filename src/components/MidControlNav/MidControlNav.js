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

const MidControlNav = (props) => {
  
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