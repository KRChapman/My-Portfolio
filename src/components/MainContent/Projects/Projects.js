import React from 'react';

import styled from 'styled-components';
import voteNow from './../../../assets/images/testA.png';
import conway from './../../../assets/images/gameB.png';
import wikiResource from './../../../assets/images/wiki.png';
import restaurant from './../../../assets/images/restaurant.png';
import simon from './../../../assets/images/simonA.png';
import {
  icons
} from './../../../variables/IconVariables.js';


import {
  withRouter,
} from 'react-router-dom';
import { getProjectStatus } from '../../../UtilityHelpers/UtilityHelpers';

import ProjectsToDisplay from './ProjectsToDisplay/ProjectsToDisplay';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const restaurantStyle = {
  pictureStyle: {
    width: "300px",
    height: "250px"
  }}
const simonStyle = {
  pictureStyle: {
    "width": "330px",
    "height": "310px",
    "-moz-transform": "scale(0.97)",
    "-webkit-transform": "scale(0.97)",
    "transform": "scale(0.97)",
    position: "relative",
    display: "block",
    top: "-40px",
    left:"-15px",
  }
}

// width: "100%",
//   height: "220px",
//     "object-fit": "cover",


const projectsInfo = {
  voteNow: createProjectsInfo("Vote-Now-Omatic", "https://github.com/KRChapman/VotingApp",
    "https://protected-fjord-13167.herokuapp.com/", {  pictureStyle: { marginLeft: "-40px" } },"Full stack vanilla JavaScript application. Log in and create polls for other people around the world to vote on and chart the results.",
    ["mongoDB", "node", "javaScript", "sass"]),
  wikiResource: createProjectsInfo("MyWiki Saver", "https://github.com/KRChapman/personalWiki",
    "https://mywiki-1306.appspot.com/", { containerStyle: { border: "1px solid black" }, pictureStyle: { marginLeft: "-10px" } }, "Full stack Python application. Log in and generate pages and posts. Save links and edit or delete content.",
    ["python", "javaScript", "gql"]),
  conway: createProjectsInfo("Conway's Game Of Life",  "https://github.com/KRChapman/GameOfLife", "https://krchapman.github.io/GameOfLife/"
    , { containerStyle: null, pictureStyle: { marginLeft: "-16px" } }, "React application using Sass that is a visual representation of my algorithm to display Conway's Game of Life.",
    ["react", "sass"] ),
  simon: createProjectsInfo("Simon Game", "https://github.com/KRChapman/FCCProjects/tree/master/simonGame", "http://simongame-kc.surge.sh/", simonStyle, 
  "Vanilla Javascript Project that is a replication of the game simon says. Turn it on and give it a go.",
    ["javaScript", "sass"]),
  restaurant: createProjectsInfo("Restaurant Explorer", "https://github.com/KRChapman/Restaurant-Explorer", "https://restaurantexploring.com/", restaurantStyle,
    "Combines the API's of Google Maps data, Yelp data and Health Department data all in one search.",
    [ "react", "node"]),
};



const Projects = (props) => {
  const projects = [ "restaurant", "simon"]
  const projectsPictures = { restaurant, voteNow, conway, wikiResource, simon}
  const projectData = projectsInfo
  const projectsStatuses = getProjectStatus(props, projectData);

  return (
    
    <Container>
      <ProjectsToDisplay projects={projects} projectsStatuses={projectsStatuses} route={props.route} 
        hideProject={props.hideProject} isDesktop={props.isDesktop}
        projectData={projectData} projectsPictures={projectsPictures} boxOpacicty={props.boxOpacicty} boxSpread={props.boxSpread}/>
    </Container>
  )
}




    

function createProjectsInfo(header, githubLink, projectLink, style = {}, textInfo = "", displayIcons) {
  const iconsToDisplay = displayIcons.map(ele => {
    return icons[ele]
  })
  let additionalStyle = { containerStyle: null, pictureStyle: null, ...style };

  return {
    header,
    iconsInfo: iconsToDisplay,
    githubLink,
    projectLink,
    textInfo,
    additionalStyle,
  }
}

export default withRouter(Projects);
