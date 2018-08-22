import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
`;

const MenuSliderContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default MenuSliderContainer;