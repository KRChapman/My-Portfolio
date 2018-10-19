import React from 'react';
import IndividualProjects from '../IndividualProjects/IndividualProjects';
import styled, { css } from 'styled-components';
import Card from '../../../SharedUI/Card/Card';

//opacity: ${ props => props.projectOpacity}; 
const CardContainer = styled.div`
  width: 325px;
  height: 360px;
  margin-right: 5px;
  margin-top: 25px;
  
  transition: opacity 0.8s ease; 
  

    ${ props => props.projectOpacity === 0 && css`
 
      transform: scale(1.31);
     
  `};  

`;


const ProjectsToDisplay = (props) => {
  const { projects, projectsStatuses, route, projectData, projectsPictures, hideProject} = props;

  let chosenProjects = (function () {
    return projects.map((ele) => {

      let opacity = projectsStatuses[ele] ? projectsStatuses[ele].opacity : 1;
      let routeCheck = route === '/' ? "/projects" : route;
      let text = <IndividualProjects iconsInfo={projectData[ele].iconsInfo} header={projectData[ele].header} link={projectData[ele].githubLink} textInfo={projectData[ele].textInfo}
        route={routeCheck} hideProject={hideProject} projectOpacity={opacity} isDesktop={props.isDesktop}>
      </IndividualProjects>;
      return <CardContainer key={ele} projectOpacity={opacity}>
        <Card linkTo={projectData[ele].projectLink} textComponent={text} altText={ele} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} containerStyle={projectData[ele].additionalStyle.containerStyle} pictureStyle={projectData[ele].additionalStyle.pictureStyle} src={projectsPictures[ele]} />
      </CardContainer>;
    });
  })();
  return (
    <React.Fragment>
      {chosenProjects}
    </React.Fragment>
  )
}

export default ProjectsToDisplay;



function newFunction(projects, projectsStatuses, route, projectData, projectsPictures) {
 
}