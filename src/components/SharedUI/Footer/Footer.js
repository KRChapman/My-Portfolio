import React from 'react';
import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';


const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 90px;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  background: rgb(137, 148, 155);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: center;

  @media (max-width: 908px) {
      justify-content: space-around; 
  }

  font-size: 12px;
`;

const CopyRight = styled.div`
  display: flex;
   margin-left: 10px;
`;

const CopyRightItems = styled.span`
  margin: 2px;
  color: #CCD6DF;
`;

const LinkContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: #CCD6DF;

  @media (min-width: 908px) {
    width: 160px; 
  }

  & > li {
    margin: 6px;
    color: #CCD6DF;   
    @media (max-width: 600px) {
     margin: 2px; 
    }
  }
`;

const Links = styled(Link)`
  color: #CCD6DF;
  text-decoration: none;
`;

const SkillsContainer = styled.div`
  flex-wrap: wrap;
  text-align: center;
`;

const DescriptionContainer = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  color: #CCD6DF;
  width: 270px;
`;

const Footer = (props) => {
  // let year = new Date().getFullYear();
  let year = 2018;
 
  return (
    <Container>
      <FooterContainer>
        <CopyRight>
          <CopyRightItems>
            ©</CopyRightItems><CopyRightItems>{year}</CopyRightItems><CopyRightItems>Kyle Chapman</CopyRightItems>
          </CopyRight>
          <SkillsContainer>
              <DescriptionContainer>
             <p style={{margin: "1px 0 0"}}>
               I started with create-react-app and styled components. Interactive portfolio created from ground up to demonstrate
              React skills.
               <Links style={{marginLeft: "4px", textDecoration: "underline"}} to={'/portfoliogithub'}>GitHubLink</Links>
             </p>
            </DescriptionContainer>
          </SkillsContainer>
          <LinkContainer>
            <li><Links to={'/portfoliogithub'}>portfolio</Links></li>
            <li><Links to={'/github'}>github</Links></li>     
            <li><Links to={'/projects'}>projects</Links></li>
            <li><Links to={'/contact'}>contact</Links></li>
            <li><Links to={'/aboutme'}>about</Links></li>
            <li><Links to={'/resume'}>resume</Links></li>         
          </LinkContainer>    
      </FooterContainer>
    </Container>
  )
}

export default Footer;