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
`;

const ControlBtnContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;

`;

const ControlBtns = styled.button`
  border: 2px solid transparent;
  color: #fff;

  padding: 2px 15px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 20px;
  text-transform: uppercase;
  font-family: Lato,sans-serif;
  background-color: ${props => props.color};
  cursor: pointer;
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
        <div>Primary Colors</div>
        <ButtonContainer>
          {primaryColors.map(ele => {

            return <ColorBtn key={ele} color={colorsObj[ele].backgroundColor} />
          })}  
          <RandomBtn>Random</RandomBtn>
        </ButtonContainer>
      </ColorContainer> 
      <ColorContainer>
        <div>Secondary Colors</div>
        <ButtonContainer>
          {secondaryColors.map(ele => {

            return <ColorBtn key={ele} color={colorsObj[ele].backgroundColorTop} />
          })}
          <RandomBtn>Random</RandomBtn>
        </ButtonContainer>    
      </ColorContainer> 

      <ControlBtnContainer>
        <ControlBtns color={"#f0ad4e"}>Close</ControlBtns>
        <ControlBtns color={"#388038"}>Local Storage Save</ControlBtns>
      </ControlBtnContainer>

    </Container>
  )
}

export default ColorModal;