
import React from 'react';
import styled from 'styled-components';
import NavItems from './NavItems/NavItems'


const Container = styled.nav`
  width: 100%;
  height: 40px;
  background-color: #DE5939;
  display: flex;
  justify-content: space-around;
  text-align: center;

  & > div {
    color:  #993F31;
    font-size: 14px;
    flex-basis: 100%;
    border-right: 2px solid #cf4d2e;
    display: flex;
    flex-direction: column;
  }
`;

const MidControlNav = (props) => {

  return (
    <Container>
      <NavItems buttonClicked={props.buttonClicked} changeMenu={props.changeMenu} closeMenu={props.closeMenu} />
    </Container>
  )
}

export default MidControlNav;