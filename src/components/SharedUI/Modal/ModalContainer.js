import React from 'react';
import styled from 'styled-components';
const Container = styled.div`

  width: 300px;
  height: 100px;
  border: 5px solid red;

  position: absolute;
  right: 0;
  /* left: 50; */
  top: 75px;
`


const ModalContainer = (props) => {

  return (
    <Container>
      hi
    </Container>
  )
}

export default ModalContainer;