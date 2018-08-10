import React from 'react';
import Card from '../../SharedUI/Card/Card';
import simonA from './../../../assets/images/simonA.png';
import IndividualProjects from '../Projects/IndividualProjects/IndividualProjects';
import styled from 'styled-components';
import vote from './../../../assets/images/testA.png';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`

const CardContainer = styled.div`
  width: 300px;
  height: 360px;
  margin-right: 5px;
  margin-top: 35px;
`;

const VanillaJavascript = (props) => {
  const simonData = { ...props.projectsInfo.simon };
  
  const voteNowData = { ...props.projectsInfo.voteNow };

  const simon = {
    text:
      <IndividualProjects iconsInfo={simonData.iconsInfo} header={simonData.header}
        link={simonData.githubLink} textInfo={simonData.textInfo}>

      </IndividualProjects>,
    linkTo: simonData.projectLink
  }

  const voteNow = {
    text:
      <IndividualProjects iconsInfo={voteNowData.iconsInfo} header={voteNowData.header}
        link={voteNowData.githubLink} textInfo={voteNowData.textInfo}>
        <span>aa</span>
      </IndividualProjects>,
    linkTo: voteNowData.projectLink
  }

  return (
    <Container>
     
      <CardContainer>
        <Card linkTo={simon.linkTo} textComponent={simon.text}
          boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={simonA} />
      </CardContainer>   
      <CardContainer>
        <Card linkTo={voteNow.linkTo} textComponent={voteNow.text}
          boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={vote} />
      </CardContainer> 
    </Container>
  )
}

export default VanillaJavascript;