import React from 'react';
import styled from 'styled-components';
import ColorModal from './ModalContent/ColorModal';
const Container = styled.div`

  width: 300px;
  /* height: 150px; */
   /* border: 1px solid red; */
  background-color: #fff;
  position: absolute;
  right: 5px;
  /* left: 50; */
  top: 75px;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
`;


const ModalContainer = (props) => {

  return (
    <Container>
      <ColorModal />

    </Container>
  )
}

export default ModalContainer;