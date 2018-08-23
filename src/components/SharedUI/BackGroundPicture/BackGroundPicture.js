import React from 'react';
import styled from 'styled-components';
import techFSmall from './../../../assets/images/techFSmall.jpg';
import techSmall from './../../../assets/images/techSmall.jpg';
import techD from './../../../assets/images/techD.jpg';
import techDVerySmall from './../../../assets/images/techDVerySmall.jpg';
import danceA from './../../../assets/images/danceA.jpg';
import wasteA from './../../../assets/images/wasteA.jpg';
import danceASmall from './../../../assets/images/danceASmall.jpg';
import wasteSmall from './../../../assets/images/wasteSmall.jpg';
import ImageDisplay from './ImageDisplay/ImageDisplay';

const Container = styled.div`
  margin-bottom: 1px;
  width: 100%;
  height: ${ props => props.theme.backgroundPictureHeight};
  overflow: hidden;

  @media (min-width: 1600px) {
       height: 450px;
       overflow: hidden ;
  };

  @media (min-width: 1599px) and (max-width:1799px)  {
       margin-bottom: 25px;
  };
`;

const Header = styled.h1`
  font-size: 34px;
  color: #fff;
  font-family: Lato,sans-serif;
  font-weight: 500;
  line-height: 1.1;
  width: 100%;
  text-align: center;
  padding: 0;
  display: inline-block;
  position: absolute;
  z-index: 600;
  text-decoration: underline;
  line-height: 1.1;
  letter-spacing: .95px;
  margin-top: 260px;
  opacity: 0.85;
   @media (min-width: 1600px) {
       margin-top: 365px;
   
  };



`;

const TopHeaderContainer = styled.div`
  @media (max-width: 900px) {
    margin: 0px auto;
    width: 201px; 
  };
`;

const Skills = styled.div`
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  margin-top: 12px;
`;

const BackGroundPicture = (props) =>  {
  const mountainProjects = props.backgroundpic === '/projects' || props.backgroundpic === '/' ?
    <Container >
      <TopHeaderContainer>
        <Header style={{ marginTop: "15px", width: "200px", textDecoration: "none" }}>
          Seattle, WA
        </Header>
      </TopHeaderContainer>  
      <Header>Projects<br></br>
        <Skills >Skills: Html/Css, javaScript, React, SQL, MongoDb, Node, Express</Skills>
      </Header>
      <ImageDisplay srcLoaded={techSmall} pictureSmall={techFSmall} />
    </Container> : null;

  const computerContact = props.backgroundpic === '/contact' ?
    <Container >
      <ImageDisplay srcLoaded={techD} pictureSmall={techDVerySmall} />
    </Container> : null;

  const aboutMe = props.backgroundpic === '/aboutme' ?
    <Container >
      <ImageDisplay srcLoaded={danceA} pictureSmall={danceASmall} />
    </Container> : null;

  const vanillaJavascript = props.backgroundpic === '/vanillajavascript' ?
    <Container style={{ height: "100%", position: "absolute", zIndex: "-1"}} >
      <ImageDisplay pictureStyle={{ height: "100%"}} srcLoaded={wasteA} pictureSmall={wasteSmall} />
    </Container> : null;

  return (
    <React.Fragment>
      {computerContact}
      {mountainProjects}
      {aboutMe}
      {vanillaJavascript}
    </React.Fragment>
  )
}

export default BackGroundPicture;