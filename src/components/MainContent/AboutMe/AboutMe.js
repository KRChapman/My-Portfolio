import React from 'react';
import styled from 'styled-components';
import wikiResource from './../../../assets/images/wiki.png';
import simon from './../../../assets/images/simonA.png';
import { getProjectStatus} from './../../../UtilityHelpers/UtilityHelpers';
import ProjectsToDisplay from '../Projects/ProjectsToDisplay/ProjectsToDisplay';

const Container = styled.div`
  width: 70%;
  margin: 10px auto;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
`;

const ProjectContainer = styled.div`


  display: flex;
  justify-content: space-around;
  transform: scale(0.90);
`;

const AboutMe = (props) => {
  const projects = ["wikiResource", "simon"];
  const projectsPictures = { wikiResource, simon};
  const projectData = { ...props.projectsInfo };
  const projectsStatuses = getProjectStatus(props, projectData);

  let chosenProjects = <ProjectsToDisplay projects={projects} projectsStatuses={projectsStatuses} route={props.route} hideProject={props.hideProject}
    projectData={projectData} projectsPictures={projectsPictures} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} />

  return (
    <Container>
      <h2>About Me</h2>
      <p>	I am currently a Teacher. I started programming as a hobby. However, the more applications I created and the deeper I dove into programming the more I loved it. My first major project was a full stack  python wiki.
       In my free time I enjoy playing video and board games, fishing and swing dancing!
        I have become very passionate about programming and web development and I want to make it a career. I do not have a formal computer science education. I am self-taught and eager to learn.
      </p>
      <ProjectContainer >
        {chosenProjects}
      </ProjectContainer>
      
    </Container>
  )
}

export default AboutMe;


// const projectsToDisplay = projects.map((ele) => {

//   let pointerEvents = projectsStatuses[ele] ? projectsStatuses[ele].pointerEvents : "auto";
//   let opacity = projectsStatuses[ele] ? projectsStatuses[ele].opacity : 1;
//   let text = <IndividualProjects iconsInfo={projectData[ele].iconsInfo} textInfo={projectData["wikiResource"].textInfo} header={projectData[ele].header}
//     link={projectData[ele].githubLink} route={props.route} hideProject={props.hideProject}>
//   </IndividualProjects>;

//   return <CardContainer key={ele} projectOpacity={opacity} pointerEvents={pointerEvents}>
//     <Card linkTo={projectData[ele].projectLink} textComponent={text}
//       boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}
//       containerStyle={{ border: "1px solid black" }}
//       pictureStyle={projectData[ele].additionalStyle.pictureStyle} src={projectsPictures[ele]} />
//   </CardContainer>;
// });