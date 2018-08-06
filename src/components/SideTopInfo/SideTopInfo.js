//main #FA7252;
import React from 'react';
import styled from 'styled-components';
import PictureInfo from './PictureInfo/PictureInfo';



const Container = styled.div`
  width: 100%;
  height: ${props => props.theme.verticle};
  background-color: ${ props => props.backgroundColor};
  padding: 12px;

`;

const SideTopInfo = (props) => {

  return (
    <Container backgroundColor={props.secondaryColor.backgroundColorTop}>
      <PictureInfo secondaryColor={props.secondaryColor}/>
    </Container>
  )
}

export default SideTopInfo;