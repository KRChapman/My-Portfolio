
import React from 'react';
import Card from '../../SharedUI/Card/Card';
import styled from 'styled-components';

import vote from './../../../assets/images/testA.png';

import gameB from './../../../assets/images/gameB.png';
import wiki from './../../../assets/images/wiki.png';


import { faLeaf, faDatabase} from '@fortawesome/free-solid-svg-icons';
import {
  faJsSquare,
  faNode,
  faPython,
  faReact,
  faSass,

} from "@fortawesome/free-brands-svg-icons";

import TechIcons from '../../SharedUI/TechIcons/TechIconsContainer';
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
`;

const Header = styled.h5`
  margin: 10px;
  margin-left: 1px;

`;
const Para = styled.p`
  margin: 1px;
  font-size: 14px;
  line-height: 1.4;

`;

const Anchor = styled.a`
width: 100%;
text-align: center;
font-size: 10px;
  color: #41505a;
  text-decoration: none;

  margin-left: 125px;
`

const HeaderContainer = styled.div`
  display: flex;
   align-items: baseline;

`

//f7df1e
  // "#cdcd21"
const Projects = (props) => {
  const size = "15px"
  const icons = {
    node: {
      title: "Node", icon: faNode, color: "black", size : "19px"
    },
    mongoDB: {
      title: "MongoDb", icon: faLeaf, color: "green", size
    },
    javaScript: {
      title: "javaScript",
      icon: faJsSquare,
      color: "#cdcd21",
      size
    },
    python: {
      title: "Python",
      icon: faPython,
      color: "blue",
      size
    },
    react: {
      title: "React",
      icon: faReact,
      color: "#00d8ff",
      size : "19px"
    },
    
    gql: {
      title: "google app engine gql/sql",
      icon: faDatabase,

    },
    sass: {
      title: "Sass",
      icon: faSass,
    }

  }


  const voteNowIcons = [icons.mongoDB, icons.node, icons.javaScript, icons.sass];

  const wikiIcons = [icons.python, icons.javaScript, icons.gql];
  const conwayIcons = [icons.react, , icons.sass]
  const voteNow = {
    text: <div>
      <HeaderContainer>
        <Header>Vote-Now-Omatic</Header><TechIcons iconsInfo={voteNowIcons} />
      </HeaderContainer>
      <Para>Full stack vanilla Javascript application. Log in and create polls
        for other people around the world to vote on and chart the results.
      </Para>
      <Anchor href="https://github.com/KRChapman/VotingApp">GitHub</Anchor>
    </div>,
    linkTo: "https://protected-fjord-13167.herokuapp.com/"
  }
  
  const wikiResource = {
    text: <div>
      <HeaderContainer>
        <Header>MyWiki Saver</Header><TechIcons iconsInfo={wikiIcons} />
      </HeaderContainer>
      <Para>Full stack Python application. Log in and create pages and posts.
        Save links and edit or delete your content after posting.
      </Para>
      <Anchor href="https://github.com/KRChapman/personalWiki">GitHub</Anchor>
    </div>,
    linkTo: "https://mywiki-1306.appspot.com/",
  }

  const conway = {
    text: <div>
      <HeaderContainer>
        <Header>Conway's Game Of Life</Header><TechIcons iconsInfo={conwayIcons} />
      </HeaderContainer>
      <Para>A React application visually representing my algorithm
           to display Conway's game of life.
      </Para>
      <Anchor href="https://github.com/KRChapman/GameOfLife">GitHub</Anchor>
    </div>,
    linkTo: ""
  }
  
  return (
    <React.Fragment>
    <Container>
      <CardContainer>
        <Card linkTo={voteNow.linkTo} textComponent={voteNow.text} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} 
          pictureStyle={{ marginLeft: "-45px" }}  src={vote} />

      </CardContainer>

      <CardContainer>

        <Card linkTo={wikiResource.linkTo} textComponent={wikiResource.text} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} 
          containerStyle={{ border: "1px solid black" }} pictureStyle={{ marginLeft: "-6px" }} src={wiki} />
      </CardContainer>

      <CardContainer>
        <Card wikiResource={conway.linkTo} textComponent={conway.text}  boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} src={gameB} />

      </CardContainer>
   
     
    </Container>
    </React.Fragment>
  )
}

export default Projects;