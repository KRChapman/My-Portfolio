import React from 'react';
import IndividualProjects from '../IndividualProjects/IndividualProjects';
import styled, { css, keyframes } from 'styled-components';
import Card from '../../../SharedUI/Card/Card';

const grow = keyframes`

0% {transform: scale(1.0);}
25% {transform: scale(1.05);}
50% {transform: scale(1.10);}
75% {transform: scale(1.15);}
100% {transform: scale(1.21);}
`;

const CardContainer = styled.div`
  width: 325px;
  height: 360px;
  margin-right: 5px;
  margin-top: 25px;
  
    ${ props => props.projectOpacity === 0 && css`

    animation: ${grow} .35s linear;
    animation-fill-mode: forwards;
    animation-direction: normal;
  `};

`;


const ProjectsToDisplay = (props) => {
  const { projects, projectsStatuses, route, projectData, projectsPictures, hideProject} = props;

  let chosenProjects = (function () {
    return projects.map((ele,i) => {
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


