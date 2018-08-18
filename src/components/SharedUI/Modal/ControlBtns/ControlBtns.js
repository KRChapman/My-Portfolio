
import React from 'react';
import styled from 'styled-components';

const ControlStyle = styled.button`
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

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ControlBtns = (props) => {
  const clicked = props.clicked;
  const clickClose = props.clickClose;
  function click(){
    if (clicked !== null){
      clicked();
    }
    if (clickClose !== null){
      clickClose();
    }
  }
  return (
    <ControlStyle 
      onClick={click} color={props.color} disabled={props.disabled}>{props.children} 
    </ControlStyle>
  )
}

export default ControlBtns;