
import React from 'react';
import styled from 'styled-components';
import techF from './../../../assets/images/techF.jpg';
import techE from './../../../assets/images/techE.jpg';
import danceA from './../../../assets/images/danceA.jpg';

// 2400px;
// margin: 0 auto;

const ImageCrop = styled.div`
   width: 100%;
   height: 200px;
   overflow: hidden;
  /* margin-top: 100px; */
background-image: url(${ props => props.picture});
/* background-image: cover; */
background-size: cover;
 background-position: center;
 @media (min-width: 1600px) {
       height: 250px;
       overflow: auto;
  };
/* background-position: center 900px; */
  
`;

const Container = styled.div`
  margin-bottom: 40px;
  width: 100%;
 height: 200px;
 overflow: hidden;

  @media (min-width: 1600px) {
       height: 250px;
       overflow: hidden ;
  };

   @media (min-width: 1599px) and (max-width:1799px)  {
       margin-bottom: 60px;
  };
`;
//  
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
  margin-top: 145px;
  opacity: 0.85;
   @media (min-width: 1600px) {
       margin-top: 195px;
  };
`

//style = {{ marginBottom: "5000px" }}
// pictureStyle = {{ marginLeft: "-6px" }}
//style={{ width: "100%", height: " 100%"}}
//, marginLeft: "1px"
// <img src={techE} style={{ maxWidth: "2400px", marginTop: "-390px" }} alt="" />
const BackGroundPicture = (props) => {

  const sunSetMountainProjects = props.backgroundpic === '/projects' ? <Container >
    <Header style={{ marginTop: "10px", marginRigth: "94%", width: "200px",  textDecoration: "none"}}>Seattle, WA</Header>
    <Header style={{  textDecoration: "underline" }} >Projects:</Header>
                                                                      <ImageCrop picture={techF}>
                                                                      </ImageCrop>
                                                                    </Container> : null;
  
  
  const computerContact = props.backgroundpic === '/contact' ? <Container >
    
    
                                                                      <ImageCrop picture={techE}>
                                                                      </ImageCrop>
                                                                    </Container> : null;
                                
  const aboutMe = props.backgroundpic === '/aboutme' ? <Container >
    
    
                                                                      <ImageCrop picture={danceA}>
                                                                      </ImageCrop>
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