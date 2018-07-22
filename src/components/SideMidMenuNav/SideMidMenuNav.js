
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 48px;
  background-color: #cd573b;
  display: flex;

  & > div {
    font-size: 14px;
  }

`
const Para = styled.div`
  color: #fff;

`

const SideMidMenuNav = (props) => {

  return (
    <Container>
      <Para>This Project:</Para>
      <div>Menu</div>
      <div>About</div>
      <div>Features</div>
    </Container>
  )
}

export default SideMidMenuNav;