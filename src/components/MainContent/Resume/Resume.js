import React from 'react';
import styled from 'styled-components';
import resumePDF from './../../../assets/images/Kyle-Chapman-resume.pdf'
import resume from './../../../assets/images/resume-2.jpg';
const Container = styled.div`

`

const Image = styled.img`
  width: 100%;
`;

const Header = styled.h4`
  margin: 20px auto 25px;
  width: 250px;

  & > a {
    color: #363f46;
  }
`;
//     
const ImageContainer = styled.div`
  width: 98%;
  margin: 0 auto;
`;



const Resume = (props) => {

  return (
    <Container>
      <Header><a href={resumePDF}>PDF for Resume</a></Header>
      <ImageContainer>
        <a href={resumePDF}> <Image src={resume} alt="resume" srcset="" /></a>    
      </ImageContainer>
    </Container>
  )
}

export default Resume;