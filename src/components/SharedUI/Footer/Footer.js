import React from 'react';
import styled from 'styled-components';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const fontSize = "12px";


const Container = styled.div`
  margin-top: 90px;
  width: 100%;
  height: 80px;
  
`

const FooterContainer = styled.div`
  
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  /* border: 1px solid red; */
   background: rgb(137, 148, 155);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* background:  */
  align-items: center;

  font-size: ${fontSize};
`

const CopyRight = styled.div`
  display: flex;


`
const CopyRightItems = styled.span`
  margin: 2px;
  color: #CCD6DF;
  
`;

const LinkContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  color: #CCD6DF;
 
  & > li {
    margin: 6px;
    color: #CCD6DF;
    
  }

`
const Links = styled(Link)`
  color: #CCD6DF;
  text-decoration: none;
 
`;

const SkillsContainer = styled.div`
  
  flex-wrap: wrap;
  text-align: center;
  
`
const SkillsUL = styled.ul`
  list-style: none;
   margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #CCD6DF;

  & > li {
    font-size: 14px;
  }

  width: 180px;

`
const Tittle = styled.div`
  color:  #CCD6DF;
  margin-bottom: 2px;
  font-size: 14px;
`

const Footer = (props) => {
  var today = new Date().getFullYear();
  var year = today;

  return (
    <Container>
      <FooterContainer>
        <CopyRight>
          <CopyRightItems>
            ©</CopyRightItems><CopyRightItems>{year}</CopyRightItems><CopyRightItems>Kyle Chapman</CopyRightItems>
          </CopyRight>
          <SkillsContainer>
          <Tittle >Skills:</Tittle>
            <SkillsUL>
              <li>javaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDb</li>
              <li>SQL</li>
            </SkillsUL>
          </SkillsContainer>
  
          <LinkContainer>
          <li><Links to={'/projects'}>projects</Links></li>
          <li><Links to={'/contact'}>contact</Links></li>
          <li><Links to={'/aboutme'}>about</Links></li>
          <li><Links to={'/github'}>github</Links></li>
          <li><Links to={'/resume'}>resume</Links></li>
          <li><Links to={'/portfoliogithub'}> portfolioGitHub</Links></li>
          </LinkContainer>
    
      </FooterContainer>
    </Container>
  )
}

export default Footer;