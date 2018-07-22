
import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 38px;
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

`
const Para = styled.span`
  /* color: #8f5234; */
  border-right: 2px solid #cf4d2e;
  
  
  color:  #993F31;
  flex-basis: 100%;
  height: 100%;

`
const ArrowIcon = styled.i`
  font-size: 26px;
  margin-top: 12%;
`
const Icons = styled.i`
  margin-top: 3%;
  font-size: 16px;
`

const MidControlNav = (props) => {

  return (
    <Container>
      <Para onClick={props.closeMenu}><ArrowIcon className={"fas fa-arrow-left"}></ArrowIcon></Para>
      <div >Menu <Icons className={"fas fa-book-open"}></Icons></div>
      <div>About <Icons className={"fas fa-sitemap"}></Icons></div>
      <div>Features <Icons className={"fas fa-clipboard-list"}></Icons></div>
    </Container>
  )
}

export default MidControlNav;