
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
`;



const ControlBtns = (props) => {

  return (
    <ControlStyle onClick={() =>{props.clicked !== null ? props.clicked() : null;
                                 props.clickClose !== null ? props.clickClose() : null;}} color={props.color}>{props.children}</ControlStyle>
  )
}

export default ControlBtns;