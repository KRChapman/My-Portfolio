import React from 'react';
// import picture from './../../../assets/images/simons.jpg';
import styled from 'styled-components';

const Container = styled.div`

  width: 100%;
  height: 100%;
  background: #fff;
  
  padding: 12.5px;
  border-radius: 10px;

  /* ba */
  /* display: flex; */
`;

const ImageCrop = styled.div`
   width: 275px;
   height: 225px;
   overflow: hidden;

   /* display:flex;
  align-items:center;
  justify-content:center; */
  
`;

const Image = styled.img`
 /* display: block; */
/* style={{ maxWidth: "initial" }}  */
 
 

`
    /* rules from above, plus... */
 

//  <img src={picture} alt="" />
//style={{ width: "400px", height: "500px" }}
//   <img src={gameA} alt="" />

//style={{ maxWidth: "initial" }}
//, marginBottom: "-170px"
const Card = (props) => {

  return (
    <Container >

      <ImageCrop style={{ ...props.containerStyle }} >
        
        <Image style={{ ...props.pictureStyle}} src={props.src} alt="" />
        
        </ImageCrop>
        <div>
            <p>aa</p>

        </div>
     
      
    </Container>


   
  )
}

{/* <ImageCrop>
  <img style={{ maxWidth: "initial" }} src={test} alt="" />
</ImageCrop> */}

export default Card;