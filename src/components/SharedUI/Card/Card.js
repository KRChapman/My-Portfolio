import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 12.5px;
  border-radius: 10px;
  -webkit-box-shadow: 4px 4px 16px ${props => props.boxSpread} rgba(0,0,0, ${props => props.boxOpacicty});
  -moz-box-shadow: 4px 4px 16px ${props => props.boxSpread} rgba(0,0,0, ${props => props.boxOpacicty});
  box-shadow: 4px 4px 16px ${props => props.boxSpread}rgba(0,0,0, ${props => props.boxOpacicty}); 
`;

const ImageCrop = styled.div`
  width: 300px;
  height: 220px;
  overflow: hidden;

`;

const Image = styled.img`
  vertical-align: bottom;
  border: 0;

  &:hover{
    background: red;
    opacity: 0.4; 
  }
`;

const Card = (props) => {

  return (
    <Container boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}>
      <a target='_blank' href={props.linkTo} style={{ ...props.anchorStyle }}>
      <ImageCrop style={{ ...props.containerStyle }} >
        <Image style={{ ...props.pictureStyle }} src={props.src} alt={props.altText} />       
      </ImageCrop>
      </a>
      <div>
        {props.textComponent}
        {props.children}
      </div>   
    </Container>
  )
}

export default Card;