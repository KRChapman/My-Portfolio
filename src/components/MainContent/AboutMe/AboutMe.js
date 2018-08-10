import React from 'react';
import styled from 'styled-components';
import wiki from './../../../assets/images/wiki.png';
import IndividualProjects from '../Projects/IndividualProjects/IndividualProjects';
import Card from '../../SharedUI/Card/Card';

const Container = styled.div`
  width: 70%;
  margin: 40px auto;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;

`;
const CardContainer = styled.div`
  width: 200px;
  height: 260px;
  margin-right: 5px;
  margin-top: 35px;
`;

const AboutMe = (props) => {
  const wikiResourceData = { ...props.wikiResourceProject };

  const wikiResource = {
    text:
      <IndividualProjects iconsInfo={wikiResourceData.iconsInfo} header={wikiResourceData.header}
        link={wikiResourceData.githubLink} textInfo={""}>
      </IndividualProjects>,

    linkTo: wikiResourceData.projectLink,
  }

  return (
    <Container>
      <h2>About Me</h2>
      <p style={ {textIndent: "40px"}}>	I am currently a Teacher. I started programming as a hobby. However, the more applications I created and the deeper I dove into programming the more I loved it. My first major project was a full stack  python wiki.
       In my free time I enjoy playing video and board games, fishing, and swing dancing!
        I have become very passionate about programming and web development and I want to make it a career. I do not have a formal computer science education, but I am self-taught and eager to learn.
      </p>
      <CardContainer>
        <Card containerStyle={{width: "175px", height: "125px"}} linkTo={wikiResource.linkTo} textComponent={wikiResource.text}
          boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={wiki} />
      </CardContainer>   
      <p style={{ textIndent: "40px" }}>
        {wikiResourceData.textInfo}
      </p>
    </Container>
  )
}

export default AboutMe;