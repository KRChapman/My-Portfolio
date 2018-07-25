import React from 'react';
import styled from 'styled-components';

import {
  Link,
  NavLink,
} from 'react-router-dom';
import ListItemLink from './MenuListItems/ListItemLink/ListItemLink';



const Container = styled.div`
  background-color: #273135;
`

const Description = styled.div`
  color: #89949B;

`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
 
`

//
  // < i class="fas fa-caret-right" ></i >
const SideBottomMenu = (props) => {


  return (
    <Container>
      <Description>Navigation Pages</Description>
      <nav>
        <List>
          
          <li><ListItemLink  icon={'fas fa-caret-right'} to={'/projects'}>The projects </ListItemLink></li>
          <li><ListItemLink  counter={true} icon={'far fa-file-code'} to={'/contact'}>The  </ListItemLink></li>
        </List>
      </nav>
    </Container>
  )
}

export default SideBottomMenu;