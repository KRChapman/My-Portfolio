import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.color};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
`;


const ColorBtn = (props) => {
  console.log("props", props);
  return (
    <Container color={props.color}></Container>
  )
}

export default ColorBtn;