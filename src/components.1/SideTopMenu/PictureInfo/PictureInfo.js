import React from 'react';
import styled from 'styled-components';
import picture from './../../../assets/images/portfolio-picture.jpg'

const Container = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
  width: 100%;
`;

const Name = styled.div`
  font-size: 16px; 
  margin-bottom: 5px;
  color: white;
  font-family: Lato,sans-serif;
`;

const HR = styled.div`
  margin: 0;
  height: 4px;
  width: 115px;
  border-radius: 0; 
  background: #DE5939;
  box-shadow: inset 35px 1px 2px rgba(0,0,0,0.2);
`;

const Icon = styled.i`
  color: #DE5939;
  font-size: 20px;
`;

const PictureInfo = (props) => {

  return (
      <Container>      
        <img style={{ height: "35px" }} src={picture} alt="Port Folio Picture" />         
        <div>
          <Name>Kyle Chapman</Name>
          <HR  />
        </div>     
        <Icon className={"fas fa-folder-open"} ></Icon>
      </Container>
  )
}

export default PictureInfo;