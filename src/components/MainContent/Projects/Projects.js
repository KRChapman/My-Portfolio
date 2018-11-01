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

  return (
    
    <Container>
      <ProjectsToDisplay projects={projects} projectsStatuses={projectsStatuses} route={props.route} 
        hideProject={props.hideProject} isDesktop={props.isDesktop}
        projectData={projectData} projectsPictures={projectsPictures} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}/>
    </Container>
  )
}

export default withRouter(Projects);
