import React from 'react';
import Card from '../../SharedUI/Card/Card';
import simon from './../../../assets/images/simonA.png';
import IndividualProjects from '../Projects/IndividualProjects/IndividualProjects';
import styled from 'styled-components';
import voteNow from './../../../assets/images/testA.png';
import { getProjectStatus } from '../../../UtilityHelpers/UtilityHelpers';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  width: 325px;
  height: 360px;
  margin-right: 5px;
  margin-top: 65px;
  opacity: ${ props => props.projectOpacity}; 
  transition: opacity 0.8s ease; 

  & * {
    pointer-events: ${props => props.pointerEvents};
  }
`;

const VanillaJavascript = (props) => {
  const projects = ["simon", "voteNow"]
  const projectsPictures = { voteNow, simon}
  const projectData = { ...props.projectsInfo }
  const projectsStatuses = getProjectStatus(props, projectData);

  const projectsToDisplay = projects.map((ele) => {
    let pointerEvents = projectsStatuses[ele] ? projectsStatuses[ele].pointerEvents : "auto";
    let opacity = projectsStatuses[ele] ? projectsStatuses[ele].opacity : 1;
    let text = <IndividualProjects iconsInfo={projectData[ele].iconsInfo} header={projectData[ele].header}
      link={projectData[ele].githubLink} textInfo={projectData[ele].textInfo} route={props.route} hideProject={props.hideProject}>
    </IndividualProjects>;

    return <CardContainer key={ele} projectOpacity={opacity} pointerEvents={pointerEvents}>
      <Card linkTo={projectData[ele].projectLink} textComponent={text}
        boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}
        containerStyle={projectData[ele].additionalStyle.containerStyle}
        pictureStyle={projectData[ele].additionalStyle.pictureStyle} src={projectsPictures[ele]} />
    </CardContainer>;
  });

  return (
    <Container>    
      {projectsToDisplay}
    </Container>
  )
}


export default VanillaJavascript;