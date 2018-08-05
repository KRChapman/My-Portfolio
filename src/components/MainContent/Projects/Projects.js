
import React from 'react';
import Card from '../../SharedUI/Card/Card';
import styled from 'styled-components';
import picture from './../../../assets/images/simonsmall.png';
import test from './../../../assets/images/testA.png';
import gameA from './../../../assets/images/gameA.png';
import gameB from './../../../assets/images/gameB.png';
import wiki from './../../../assets/images/wiki.png';
import BackGroundPicture from '../../SharedUI/BackGroundPicture/BackGroundPicture';

import {
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
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




const Projects = (props) => {

 const voteNow ={ text: <div>
                  <Header>Vote-Now-Omatic</Header>
                  <Para>Full stack vanilla Javascript application. Log in and create polls
                    for other people around to world to vote on and chart the results.                  
                  </Para>
                      <Anchor href="https://github.com/KRChapman/VotingApp">GitHub</Anchor>
                    
                  
                  
                </div> ,
                linkTo: "https://protected-fjord-13167.herokuapp.com/"
 }
  
  const wikiResource ={ text: <div>
                        <Header>MyWiki Saver</Header>
                        <Para>Full stack Python application. Log in and create pages and posts.
                          Save links and edit or delete your content after posting.                 
                        </Para>
                         <Anchor href="https://github.com/KRChapman/personalWiki">GitHub</Anchor>
                      </div> ,
                      linkTo: "https://mywiki-1306.appspot.com/",
  }
  const conway = { text:<div>
                        <Header>Conway's Game Of Life</Header>
                        <Para>React application with a visual representation of my algorithm 
                             to display Conway's game of life.              
                        </Para>
                            <Anchor href="https://github.com/KRChapman/GameOfLife">GitHub</Anchor>
                      </div>,
                   linkTo :  ""
  }
  
  return (
    <React.Fragment>
      
    
  
    <Container>
      <CardContainer>
        <Card linkTo={voteNow.linkTo} textComponent={voteNow.text} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread} 
          pictureStyle={{ marginLeft: "-45px" }}  src={test} />

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
{/* <BackGroundPicture /> */}
export default Projects;