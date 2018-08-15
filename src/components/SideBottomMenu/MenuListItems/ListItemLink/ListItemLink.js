import React from 'react';
import styled from 'styled-components';
import {
  Link,
  NavLink,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
//
const LinkElem = styled(NavLink)`


  flex-basis: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size:  ${props => props.theme.fontSize};

  padding: 15px 10px;
  height: 56px;
   
  text-decoration: none;

  &.active {
    
    background-color: rgba(0, 0, 0, 0.4);
      border-left: 5px solid #E76049;
  }
`;

const ListItem = styled.li`
  width: 100%;
 
  &:hover{
  background-color:  rgba(0,0,0,0.2);
  }
  & > a {
      color: ${ props => props.textColor };
  }

`;

const IconContainer = styled(FontAwesomeIcon)`
  margin-right: 15px;
  margin-left: 10px;
  height: 100%;

`;

const RightContainer = styled.div`
  margin-right: 25px;

`;

const DivContainer = styled.div`
  padding-top: 22%;

  width: 30px;
  height: 25px;
  background-color: #2EB398;
  color: white;
  text-align: center;
  white-space: nowrap; 
  border-radius: .25em;
  font-size: 65%;
`;

const Flex = styled.div`
  display: flex;
`;

const LinkCounter = (props) => {
  return(
    <DivContainer>{props.count}</DivContainer>
  )
}


const ListItemLink = (props) => {
  const counter = props.count ? <LinkCounter count={props.count} /> : null;
  const clickToExpand = props.expandLinks != null ?  () => props.expandLinks(props.name) : null;
  const clickToShowProject = props.showProject != null ? () => props.showProject(props.to, props.children ) : null;

 return (
   <ListItem textColor={props.textColor}>
     <LinkElem to={props.to} onClick={() => {
       clickToExpand !== null ? clickToExpand() : null;
       clickToShowProject !== null ? clickToShowProject() : null;}} >
       <Flex><IconContainer icon={props.icon}></IconContainer><div style={{ display: "flex", alignItems: "center"}}><span >{props.children} </span></div></Flex> 
        <RightContainer>{counter}</RightContainer>
      </LinkElem>
      {props.ul}
    </ListItem>

    
  )
}

export default ListItemLink;