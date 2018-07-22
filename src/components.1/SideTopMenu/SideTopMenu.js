
import React from 'react';
import styled from 'styled-components';
import PictureInfo from './PictureInfo/PictureInfo';


const Container = styled.div`
  width: 100%;
  height: ${props => props.theme.verticle};
  background-color: #FA7252;
  padding: 12px;

`;

const SideTopMenu = (props) => {

  return (
    <Container>
      <PictureInfo />
    </Container>
  )
}

export default SideTopMenu;