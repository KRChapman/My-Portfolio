import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  color: #2EB398;
`;

const Header = styled.h4`
  width: 70%;
  margin-top: 4px;
  margin-Left: 24px;

`;
const Para = styled.p`
  font-size: 14px;
  line-height: 1.6;

  
`;

const Anchor = styled.a`
  width: 100%;
  text-align: center;
  font-size: 10px;
  color: #2EB398;;
  text-decoration: none;
  margin-left: 125px;
`;

const About = (props) => {

  return (
    <Container>
      <Header>About This Portfolio:</Header>
      <Para>The purpose of this portfolio is to show off my work. However, I also wanted to show
        off what I can do by making an interactive single page app with React.
      </Para>
      <Para style={{margin: 0}}>
          In addition I decided to use the styled components to make the dynamic CSS and color changes
          more straight forward. I started with create-react-app, but styled components would generate CSS
          classes that looked like this "kydAFq dyoVie". It made debugging a pain.  I ended up using react-app-rewired, to over-ride the config of webpack and install
          babel-plugin-styled-components. This is great because it generates readable classes "Projects__Container-iMEvtt jkPIAO".
           
       </Para>
      <Anchor href="https://github.com/KRChapman/My-Portfolio">Portfolio GitHub</Anchor>
    </Container>
  )
}

export default About;