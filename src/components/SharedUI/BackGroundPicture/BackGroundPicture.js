import React from 'react';
import styled from 'styled-components';
import techSmallA from './../../../assets/images/techSmallA.jpg';
import techE from './../../../assets/images/techE.jpg';
import danceA from './../../../assets/images/danceA.jpg';

const ImageCrop = styled.div`
   width: 100%;
   height: 220px;
   overflow: hidden;

  background-image: url(${ props => props.picture});

  background-size: cover;
  background-position: center;
  @media (min-width: 1600px) {
        height: 250px;
        overflow: auto;
    }; 
`;

const Container = styled.div`
  margin-bottom: 1px;
  width: 100%;
  height: 220px;
 overflow: hidden;

  @media (min-width: 1600px) {
       height: 250px;
       overflow: hidden ;
  };

   @media (min-width: 1599px) and (max-width:1799px)  {
       margin-bottom: 25px;
  };
`;

const Header = styled.h1`
  font-size: 32px;
  color: #fff;
  font-family: Lato,sans-serif;
  font-weight: 500;
  line-height: 1.1;

  width: 100%;
  text-align: center;
  padding: 0;
  display: inline-block;
  position: absolute;
  text-decoration: none;
  line-height: 1.1;
  letter-spacing: .95px;
  margin-top: 170px;
  opacity: 0.85;
   @media (min-width: 1600px) {
       margin-top: 195px;
  };
`;

const BackGroundPicture = (props) => {

  const sunSetMountainProjects = props.backgroundpic === '/projects' ?
   <Container >
    <Header style={{ marginTop: "10px", marginRigth: "94%", width: "200px",  textDecoration: "none"}}>Seattle, WA</Header>
    <Header style={{  textDecoration: "underline" }} >Projects:</Header>
      <ImageCrop picture={techSmallA}/>
  </Container> : null;
  
  const computerContact = props.backgroundpic === '/contact' ?
    <Container >
      <ImageCrop picture={techE}/>
    </Container> : null;
                                
  const aboutMe = props.backgroundpic === '/aboutme' ? 
    <Container >
      <ImageCrop picture={danceA}/> 
    </Container> : null;

  return (
    <React.Fragment>
      {computerContact}
      {sunSetMountainProjects}
      {aboutMe}
    </React.Fragment>
  
  )
}

export default BackGroundPicture;