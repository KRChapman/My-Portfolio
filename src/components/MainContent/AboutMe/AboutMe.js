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
  flex-wrap: wrap;
`;

const AboutMe = (props) => {
  const projects = ["wikiResource", "simon"];
  const projectsPictures = { wikiResource, simon};
  const projectData = { ...props.projectsInfo };
  const projectsStatuses = getProjectStatus(props, projectData);
  let chosenProjects = <ProjectsToDisplay projects={projects} projectsStatuses={projectsStatuses} route={props.route} hideProject={props.hideProject}
    projectData={projectData} projectsPictures={projectsPictures} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} isDesktop={props.isDesktop} />

  return (
    <Container>
      <h2>About Me</h2>
      <p>	My background is in teaching. I am the type of person who never stops learning.
        For example, I kept learning about math and science while my degree was in history
        education. Eventually I transitioned into substitute teaching because I wanted
        to teach these subjects right away, but did not have a degree in them.
         My continual learning led me to start programming as a hobby.
         However, the more applications I created and the deeper I dove into
         programming the more I loved it. My first major project was a full
         stack python wiki(shown bellow). I still love teaching, but want to follow
          my next passion in life. I feel that I found the perfect fit for me, because
           I can never stop learning! In my free time I enjoy playing video and board games,
           fishing and swing dancing! I have become very passionate about programming
            and web development and I want to make it a career. I do not have a formal
             computer science education, however I am self-taught and eager to learn.
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