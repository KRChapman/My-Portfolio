import React from 'react';

import styled from 'styled-components';
import voteNow from './../../../assets/images/testA.png';
import conway from './../../../assets/images/gameB.png';
import wikiResource from './../../../assets/images/wiki.png';



import {
  withRouter,
} from 'react-router-dom';
import { getProjectStatus } from '../../../UtilityHelpers/UtilityHelpers';

import ProjectsToDisplay from './ProjectsToDisplay/ProjectsToDisplay';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;



const Projects = (props) => {
  const projects = ["voteNow", "wikiResource", "conway"]
  const projectsPictures = { voteNow, conway, wikiResource}
  const projectData = { ...props.projectsInfo}
  const projectsStatuses = getProjectStatus(props, projectData);
 
  // const projectsToDisplay = newFunction(projects, projectsStatuses, route, projectData, projectsPictures);

  return (
    
    <Container>
      <ProjectsToDisplay projects={projects} projectsStatuses={projectsStatuses} route={props.route} hideProject={props.hideProject}
        projectData={projectData} projectsPictures={projectsPictures} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}/>
    </Container>
  )
}

export default withRouter(Projects);


// function newFunction(projects, projectsStatuses, route, projectData, projectsPictures) {
//   return projects.map((ele) => {
//     //set pointer event to none when project is not visible 
//     let pointerEvents = projectsStatuses[ele] ? projectsStatuses[ele].pointerEvents : "auto";
//     let opacity = projectsStatuses[ele] ? projectsStatuses[ele].opacity : 1;
//     route = route === '/' ? "/projects" : route;
//     let text = <IndividualProjects iconsInfo={projectData[ele].iconsInfo} header={projectData[ele].header} link={projectData[ele].githubLink} textInfo={projectData[ele].textInfo} route={route} hideProject={props.hideProject}>
//     </IndividualProjects>;
//     return newFunction_1(ele, opacity, pointerEvents, projectData, text, projectsPictures);
//   });
// }

// function newFunction_1(ele, opacity, pointerEvents, projectData, text, projectsPictures) {
//   return <CardContainer key={ele} projectOpacity={opacity} pointerEvents={pointerEvents}>
//     <Card linkTo={projectData[ele].projectLink} textComponent={text} altText={ele} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} containerStyle={projectData[ele].additionalStyle.containerStyle} pictureStyle={projectData[ele].additionalStyle.pictureStyle} src={projectsPictures[ele]} />
//   </CardContainer>;
// }
