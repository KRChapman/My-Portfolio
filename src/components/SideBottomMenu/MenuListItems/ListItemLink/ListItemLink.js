import React from 'react';
import styled from 'styled-components';
import {
  Link,
  NavLink,
} from 'react-router-dom';
//${ props => props.theme.fontSize }
const LinkElem = styled(NavLink)`
  color:  #89949B;

  flex-basis: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size:  ${props => props.theme.fontSize};

  padding: 20px 10px;
  height: 100%;
   
  text-decoration: none;

  &.active {
    
    background-color: rgba(0, 0, 0, 0.4);
      border-left: 5px solid #E76049;
  }
  ${props => console.log('ss', props)}

`;

const ListItem = styled.li`
  width: 100%;
  height: 64px;
  /* display: flex; */
 
  &:hover{
  background-color:  rgba(0,0,0,0.2);
  }

`
const IconContainer = styled.div`
 margin-right: 15px;
 margin-left: 10px;
`
const RightContainer = styled.div`
  margin-right: 25px;

`

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
  


`
const LinkCounter = (props) => {
  return(
    <DivContainer>{props.count}</DivContainer>
  )
}

//1px solid rgba(59,70,72,0.5);
const ListItemLink = (props) => {
  const counter = props.counter ? <LinkCounter count={1} /> : null;

  return (
    <ListItem>
      <LinkElem to={props.to}>
        <span><IconContainer className={props.icon}></IconContainer><span>{props.children} </span></span> 
        <RightContainer>{counter}</RightContainer>
      </LinkElem>
    </ListItem>

    
  )
}

export default ListItemLink;