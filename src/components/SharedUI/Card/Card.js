import React from 'react';
// import picture from './../../../assets/images/simons.jpg';
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
 display: block;
   &:hover{

    background: red;
   
       opacity: 0.4;
  
  }
/* style={{ maxWidth: "initial" }}  */

 

`
const Anchor = styled.a`

`

const Card = (props) => {
  
  return (
    <Container boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}>
      <Anchor href={props.linkTo} style={{ ...props.anchorStyle }}>
      <ImageCrop style={{ ...props.containerStyle }} >
        
        <Image style={{ ...props.pictureStyle}} src={props.src} alt="" />
        
        </ImageCrop>
        </Anchor>
        <div>
        {props.textComponent}
        {props.children}

        </div>
     
      
    </Container>


   
  )
}


export default Card;