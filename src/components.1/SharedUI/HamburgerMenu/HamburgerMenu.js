import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 80px;
  height: 100%;

  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: #2AA38B;
  display:none;

  @media (max-width: ${props => props.theme.mediaQuery}) {
    display: flex;
  }
`;

const RowDiv = styled.div`
  width: 90%;
  height: 6px;
  border-radius: 1px;
  background-color: #fff;
`;



const HamburgerMenu = (props) => {

  return (
    <Container onClick={props.toggleMenu}>
      <RowDiv></RowDiv>
      <RowDiv></RowDiv>
      <RowDiv></RowDiv>
      <RowDiv></RowDiv>
    </Container>
  )
}

export default HamburgerMenu;