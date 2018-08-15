import React from 'react';
import Card from '../../SharedUI/Card/Card';
import styled, { keyframes } from 'styled-components';
import voteNow from './../../../assets/images/testA.png';
import conway from './../../../assets/images/gameB.png';
import wikiResource from './../../../assets/images/wiki.png';
import IndividualProjects from './IndividualProjects/IndividualProjects';
import {
  withRouter,
} from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;


const CardContainer = styled.div`
  width: 325px;
  height: 360px;
  margin-right: 5px;
  margin-top: 25px;

  
  opacity: ${ props => props.projectOpacity}; 
 
  transition: opacity 0.8s ease; 

    & * {
      pointer-events: ${props => props.pointerEvents};
    }

`;

//transition-delay: 2s;
//  display: ${props => props.projectOpacity === 1 ? "block" : "none"};
//  
  // animation-name: ${ props => props.projectOpacity === 1 ?   "none": AnimateFade};
  // animation-duration: 1s;
  // animation-fill-mode: forwards;

//
//animation-fill-mode: forwards;
const Projects = (props) => {

  const projects = ["voteNow", "wikiResource", "conway"]
  const projectsPictures = {voteNow, conway, wikiResource}
  const projectData = { ...props.projectsInfo}

  const projectsStatuses = {};
  
  props.hiddenProjects.forEach(ele =>{
    for (const key in projectData) {

      if (ele.name === key && ele.route === props.route){
        
        projectsStatuses[key] = { pointerEvents: "none", opacity: 0};
      }
  
      
    }
  });
 
  
  const projectsToDisplay = projects.map((ele) =>{
    // let opacity = props.projectOff.name === ele ? 0 : 1;
    let pointerEvents = projectsStatuses[ele] ? projectsStatuses[ele].pointerEvents : "auto";
    let opacity = projectsStatuses[ele] ? projectsStatuses[ele].opacity : 1;
    let text = <IndividualProjects iconsInfo={projectData[ele].iconsInfo} header={projectData[ele].header}
      link={projectData[ele].githubLink} textInfo={projectData[ele].textInfo} route={props.location.pathname} hideProject={props.hideProject}>
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

export default withRouter(Projects);
