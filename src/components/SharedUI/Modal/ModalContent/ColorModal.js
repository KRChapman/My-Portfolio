import React from 'react';
import styled from 'styled-components';
import {
  defaultPrimary, defaultSecondary,
  primaryTurquoise, primaryLightBlue,
  secondaryTurquoise, secondaryBrown
} from './../../../../variables/ColorVariables';
import ColorBtn from '../../ColorBtn/ColorBtn';

const Container = styled.div`
  margin-top: 5%;
  width: 100%;

`;

const ColorContainer = styled.div`
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
   display: flex;
   justify-content: space-around;
`;

const RandomBtn = styled.button`
  font-size: 10px;
  border: none;
  background: #cbc8c8;
  border-radius: 100%;
  cursor: pointer;
`;

const ControlBtnContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;

`;



const ColorModal = (props) => {
  const colorsObj = {
    defaultPrimary, defaultSecondary,
    primaryTurquoise, primaryLightBlue,
    secondaryTurquoise, secondaryBrown
  };
  const primaryColors = ["primaryTurquoise", "primaryLightBlue", "defaultPrimary"];
  const secondaryColors = ["secondaryTurquoise", "secondaryBrown", "defaultSecondary"];

  return (
    <Container>    
      <ColorContainer>
        <div style={{marginBottom: "5px"}}>Primary Colors</div>
        <ButtonContainer>
          {primaryColors.map(ele => {

            return <ColorBtn key={ele} color={colorsObj[ele].backgroundColor} />
          })}  
          <RandomBtn>Random</RandomBtn>
        </ButtonContainer>
      </ColorContainer> 
      <ColorContainer>
        <div style={{ marginBottom: "5px" }}>Secondary Colors</div>
        <ButtonContainer>
          {secondaryColors.map(ele => {

            return <ColorBtn key={ele} color={colorsObj[ele].backgroundColorTop} />
          })}
          <RandomBtn>Random</RandomBtn>
        </ButtonContainer>    
      </ColorContainer> 

    </Container>
  )
}

export default ColorModal;