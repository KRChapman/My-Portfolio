import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: green;
`

const MenuWrapper = (props) => {

  return (
    <Container>
      MenuWrapper
      {props.children}
    </Container>
  )
}

export default MenuWrapper;