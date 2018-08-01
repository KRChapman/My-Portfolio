import React from 'react';
import styled from 'styled-components';
import ColorModal from './ModalContent/ColorModal';
import BoxShadowModal from './ModalContent/BoxShadowModal';
import ControlBtns from './ControlBtns/ControlBtns';

const Container = styled.div`
  width: 300px;
  background-color: #fff;
  position: absolute;
  right: 5px;
  top: 75px;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
`;

const ControlBtnContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;

`;



const ModalContainer = (props) => {
  const boxShadowModal = props.isSettings ? <BoxShadowModal /> : null;
  const colorModal = props.isColor ? <ColorModal /> : null;


  return (
    <Container>
      {boxShadowModal}
      {colorModal}
      <ControlBtnContainer>
        <ControlBtns color={"#f0ad4e"}>Close</ControlBtns>
        <ControlBtns color={"#388038"}>Local Storage Save</ControlBtns>
      </ControlBtnContainer>    
    </Container>
  )
}
//      <ColorModal />

export default ModalContainer;