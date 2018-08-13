import React, { Component } from 'react';
import styled from 'styled-components';
import techFSmall from './../../../assets/images/techFSmall.jpg';
// import techSmall from './../../../assets/images/techSmall.jpg';
import techSmall from './../../../assets/images/techSmall.jpg';
import techD from './../../../assets/images/techD.jpg';
import techDVerySmall from './../../../assets/images/techDVerySmall.jpg';
import danceA from './../../../assets/images/danceA.jpg';
import danceASmall from './../../../assets/images/danceASmall.jpg';
import ImageDisplay from './ImageDisplay/ImageDisplay';




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
  z-index: 600;
  text-decoration: none;
  line-height: 1.1;
  letter-spacing: .95px;
  margin-top: 170px;
  opacity: 0.85;
   @media (min-width: 1600px) {
       margin-top: 195px;
  };
`;

class BackGroundPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  }

 

  render() {

    const sunSetMountainProjects = this.props.backgroundpic === '/projects' ?
      <Container >
        <Header style={{ marginTop: "10px", marginRigth: "94%", width: "200px", textDecoration: "none" }}>Seattle, WA</Header>
        <Header style={{ textDecoration: "underline" }} >Projects:</Header>
       
        <ImageDisplay srcLoaded={techSmall} pictureSmall={techFSmall} />
      </Container> : null;

    const computerContact = this.props.backgroundpic === '/contact' ?
      <Container >
        <ImageDisplay srcLoaded={techD} pictureSmall={techDVerySmall} />

      </Container> : null;

    const aboutMe = this.props.backgroundpic === '/aboutme' ?
      <Container >
        <ImageDisplay srcLoaded={danceA} pictureSmall={danceASmall} />
  
      </Container> : null;



    return (
      <React.Fragment>
        {computerContact}
        {sunSetMountainProjects}
        {aboutMe}
      </React.Fragment>
    
    )
  }
}

export default BackGroundPicture;