// main  rgba(114, 133, 137, 0.45);
import React from 'react';
import styled from 'styled-components';

const HeaderBtn = styled.button`
  font-family: inherit;
  background-color: ${ props => props.buttonColor};
  color: #fff;
  outline:none;
  margin: 5px;
  border: 5px solid rgba(78, 91, 94, 0.45);
  border-radius: 5px;
  cursor: pointer;
`;

const HeaderBtns = (props) => {

  return (
    
    <HeaderBtn buttonColor={props.buttonColor} onClick={props.toggleOptions}>{props.children}</HeaderBtn>
  )
}

export default HeaderBtns;