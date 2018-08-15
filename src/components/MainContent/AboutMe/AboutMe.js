import React from 'react';
import styled from 'styled-components';
import wikiResource from './../../../assets/images/wiki.png';
import IndividualProjects from '../Projects/IndividualProjects/IndividualProjects';
import Card from '../../SharedUI/Card/Card';

const Container = styled.div`
  width: 70%;
  margin: 10px auto;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;



`;
const CardContainer = styled.div`
  width: 200px;
  height: 260px;
  margin: 10px auto;
  opacity: ${ props => props.projectOpacity}; 
  transition: opacity 0.8s ease; 

  & * {
    pointer-events: ${props => props.pointerEvents};
  }
`;

const AboutMe = (props) => {
  const wikiResourceData = { ...props.wikiResourceProject };


  const projects = ["wikiResource"]
  const projectsPictures = { wikiResource }
  const projectData = { ...props.projectsInfo }

  const projectsStatuses = {};

  props.hiddenProjects.forEach(ele => {
    for (const key in projectData) {

      if (ele.name === key && ele.route === props.route) {

        projectsStatuses[key] = { pointerEvents: "none", opacity: 0 };
      }


    }
  });


  // const wikiResource = {
  //   text:
  //     <IndividualProjects iconsInfo={wikiResourceData.iconsInfo} header={wikiResourceData.header}
  //       link={wikiResourceData.githubLink} textInfo={wikiText} route={props.route} hideProject={props.hideProject}>
  //     </IndividualProjects>,
  //   linkTo: wikiResourceData.projectLink,
  // }

  const projectsToDisplay = projects.map((ele) => {
    let smallText = <p style={{ margin: 0, fontSize: "10px", width: "180px", }}>
      {projectData[ele].textInfo}
    </p>
    let pointerEvents = projectsStatuses[ele] ? projectsStatuses[ele].pointerEvents : "auto";
    let opacity = projectsStatuses[ele] ? projectsStatuses[ele].opacity : 1;
    let text = <IndividualProjects iconsInfo={projectData[ele].iconsInfo} textInfo={smallText} header={projectData[ele].header}
      link={projectData[ele].githubLink}  route={props.route}  hideProject={props.hideProject}>
    </IndividualProjects>;

    return <CardContainer key={ele} projectOpacity={opacity} pointerEvents={pointerEvents}>
      <Card linkTo={projectData[ele].projectLink} textComponent={text}
        boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}
        containerStyle={{ width: "175px", height: "125px" }}
        pictureStyle={projectData[ele].additionalStyle.pictureStyle} src={projectsPictures[ele]} />
    </CardContainer>;
  });

 


  return (
    <Container>
      <h2>About Me</h2>
      <p style={ {textIndent: "40px"}}>	I am currently a Teacher. I started programming as a hobby. However, the more applications I created and the deeper I dove into programming the more I loved it. My first major project was a full stack  python wiki.
       In my free time I enjoy playing video and board games, fishing, and swing dancing!
        I have become very passionate about programming and web development and I want to make it a career. I do not have a formal computer science education, but I am self-taught and eager to learn.
      </p>
      {projectsToDisplay}
 
    </Container>
  )
}
{/* <CardContainer>
  <Card containerStyle={{ width: "175px", height: "125px" }} linkTo={wikiResource.linkTo} textComponent={wikiResource.text}
    boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={wiki} />

</CardContainer>    */}
export default AboutMe;