import React from 'react';
import styled from 'styled-components';
import resume from './../../../assets/images/resume-1.jpg';
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
      <Header><a href="https://www.dropbox.com/sh/k7xzvm83zxke0fi/AAAgxtvF69DHEfpYvDh0_v5_a?dl=0">Download resume from dropbox</a></Header>
      <ImageContainer>
        <Image src={resume} alt="resume" srcset="" />
      </ImageContainer>
    </Container>
  )
}

export default Resume;