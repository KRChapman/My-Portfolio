
import React from 'react';
import Card from '../../SharedUI/Card/Card';
import styled from 'styled-components';
import picture from './../../../assets/images/simonsmall.png';
import test from './../../../assets/images/testA.png';
import gameA from './../../../assets/images/gameA.png';
import gameB from './../../../assets/images/gameB.png';
import wiki from './../../../assets/images/wiki.png';

const Container = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
`;

const CardContainer = styled.div`
  width: 300px;
  height: 350px;
  margin-right: 5px;
`;

const Projects = (props) => {

  return (
    <Container>
      <CardContainer>
        <Card pictureStyle={{ marginLeft: "-45px" }}  src={test} />


      </CardContainer>

      <CardContainer>

        <Card containerStyle={{ border: "1px solid black" }} pictureStyle={{ marginLeft: "-6px" }} src={wiki} />
      </CardContainer>

      <CardContainer>
        <Card src={gameB} />

      </CardContainer>
     
    </Container>
  )
}

export default Projects;