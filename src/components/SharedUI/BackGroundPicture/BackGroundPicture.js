
import React from 'react';
import styled from 'styled-components';
import techF from './../../../assets/images/techF.jpg';
import techE from './../../../assets/images/techE.jpg';

// 2400px;
// margin: 0 auto;

const ImageCrop = styled.div`
   width: 100%;
   height: 275px;
   overflow: hidden;
  /* margin-top: 100px; */
background-image: url(${ props => props.picture});
/* background-image: cover; */
background-size: cover;
 background-position: center;
 @media (min-width: 1800px) {
       height: 800px;
       overflow: auto;
  };
/* background-position: center 900px; */
  
`;

const Container = styled.div`
  width: 100%;
 height: 300px;
 overflow: hidden;

  @media (min-width: 1800px) {
       height: 800px;
       overflow: hidden ;
  };
`;

const Header = styled.h1`
  font-size: 32px;
  color: #fff;
  font-family: Lato,sans-serif;
    font-weight: 500;
    line-height: 1.1;
  margin-top: ${props => props.style.marginTop};
  margin-left: ${props => props.style.marginLeft};
  width: 20%;
  padding: 0;
  display: inline-block;
  position: absolute;
  text-decoration: ${props => props.style.textDecoration};
  line-height: 1.1;
  letter-spacing: .95px;
  opacity: 0.85;
`

//style = {{ marginBottom: "5000px" }}
// pictureStyle = {{ marginLeft: "-6px" }}
//style={{ width: "100%", height: " 100%"}}
//, marginLeft: "1px"
// <img src={techE} style={{ maxWidth: "2400px", marginTop: "-390px" }} alt="" />
const BackGroundPicture = (props) => {

  const sunSetMountainProjects = props.backgroundpic === '/projects' ? <Container >
    <Header style={{ marginLeft: "1%", textDecoration: "none"}}>Seattle, WA</Header>
    <Header style={{ marginLeft: "35%", marginTop: "100px", textDecoration: "underline" }} >Projects:</Header>
                                                                      <ImageCrop picture={techF}>
                                                                      </ImageCrop>
                                                                    </Container> : null;
  
  
  const computerContact = props.backgroundpic === '/contact' ? <Container >
    
    
                                                                      <ImageCrop picture={techE}>
                                                                      </ImageCrop>
                                                                    </Container> : null;

  return (
    <React.Fragment>
      {computerContact}
      {sunSetMountainProjects}
    </React.Fragment>
  
  )
}

export default BackGroundPicture;