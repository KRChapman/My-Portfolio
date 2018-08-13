import React from 'react';
import Card from '../../SharedUI/Card/Card';
import styled from 'styled-components';
import vote from './../../../assets/images/testA.png';
import gameB from './../../../assets/images/gameB.png';
import wiki from './../../../assets/images/wiki.png';

import IndividualProjects from './IndividualProjects/IndividualProjects';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  width: 300px;
  height: 360px;
  margin-right: 5px;
  margin-top: 28px;
`;

const Projects = (props) => {


  const voteNowData = {...props.projectsInfo.voteNow};
  const wikiResourceData  = {...props.projectsInfo.wikiResource};
  const conwayData = {...props.projectsInfo.conway};


  const voteNow = {   
    text: 
      <IndividualProjects iconsInfo={voteNowData.iconsInfo} header={voteNowData.header} 
        link={voteNowData.githubLink} textInfo={voteNowData.textInfo}>
        <span>aa</span>
      </IndividualProjects>,
      linkTo: voteNowData.projectLink
  }
  
  const wikiResource = {
    text: 
      <IndividualProjects iconsInfo={wikiResourceData.iconsInfo} header={wikiResourceData.header}
        link={wikiResourceData.githubLink} textInfo={wikiResourceData.textInfo}>
      </IndividualProjects>,
    
    linkTo: wikiResourceData.projectLink,
  }

  const conway = {
    text:    
      <IndividualProjects iconsInfo={conwayData.iconsInfo} header={conwayData.header}
        link={conwayData.githubLink} textInfo={conwayData.textInfo}>
       
      </IndividualProjects>,
    linkTo: conwayData.projectLink
  }
  
  return (
    <React.Fragment>
    <Container>
      <CardContainer>
        <Card linkTo={voteNow.linkTo} textComponent={voteNow.text}
          boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} 
          pictureStyle={{ marginLeft: "-45px" }}  src={vote} />
      </CardContainer>
      <CardContainer>
        <Card linkTo={wikiResource.linkTo} textComponent={wikiResource.text} 
          boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} 
          containerStyle={{ border: "1px solid black" }} pictureStyle={{ marginLeft: "-6px" }} src={wiki} />
      </CardContainer>
      <CardContainer>
          <Card linkTo={conway.linkTo} textComponent={conway.text}  
          boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={gameB} />
      </CardContainer>   
    </Container>
    </React.Fragment>
  )
}

export default Projects;