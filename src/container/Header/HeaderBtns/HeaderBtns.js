import React from 'react';
import styled from 'styled-components';

const HeaderBtn = styled.button`
  font-family: inherit;
  background-color: rgba(114, 133, 137, 0.45);;
  color: #fff;
  outline:none;
  margin: 5px;
  border: 5px solid rgba(78, 91, 94, 0.45);
  border-radius: 5px;
  cursor: pointer;
`;

const HeaderBtns = (props) => {

  return (
    
    <HeaderBtn>{props.children}</HeaderBtn>
  )
}

export default HeaderBtns;