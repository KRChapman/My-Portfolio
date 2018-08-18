import React from 'react';
import Card from '../../SharedUI/Card/Card';
import simon from './../../../assets/images/simonA.png';
import IndividualProjects from '../Projects/IndividualProjects/IndividualProjects';
import styled from 'styled-components';
import voteNow from './../../../assets/images/testA.png';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`

const CardContainer = styled.div`
  width: 325px;
  height: 360px;
  margin-right: 5px;
  margin-top: 35px;

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

  const projectsStatuses = {};

  props.hiddenProjects.forEach(ele => {
    for (const key in projectData) {

      if (ele.name === key && ele.route === props.route) {
        // console.log("ele.route", ele.route);
        // console.log("hiddenProjects", props.route);
        projectsStatuses[key] = { pointerEvents: "none", opacity: 0 };
      }


    }
  });


  const projectsToDisplay = projects.map((ele) => {
    // let opacity = props.projectOff.name === ele ? 0 : 1;
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














  // const simonData = { ...props.projectsInfo.simon };
  
  // const voteNowData = { ...props.projectsInfo.voteNow };

  // const simon = {
  //   text:
  //     <IndividualProjects iconsInfo={simonData.iconsInfo} header={simonData.header}
  //       link={simonData.githubLink} textInfo={simonData.textInfo}>

  //     </IndividualProjects>,
  //   linkTo: simonData.projectLink
  // }

  // const voteNow = {
  //   text:
  //     <IndividualProjects iconsInfo={voteNowData.iconsInfo} header={voteNowData.header}
  //       link={voteNowData.githubLink} textInfo={voteNowData.textInfo}>
  //       <span>aa</span>
  //     </IndividualProjects>,
  //   linkTo: voteNowData.projectLink
  // }

  return (
    <Container>
     
      {projectsToDisplay}
    </Container>
  )
}

{/* <CardContainer>
  <Card linkTo={simon.linkTo} textComponent={simon.text}
    boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={simonA} />
</CardContainer>
  <CardContainer>
    <Card linkTo={voteNow.linkTo} textComponent={voteNow.text}
      boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={vote} />
  </CardContainer>  */}

export default VanillaJavascript;