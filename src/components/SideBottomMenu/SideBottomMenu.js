import React from 'react';
import styled from 'styled-components';

import ListItemLink from './MenuListItems/ListItemLink/ListItemLink';

const Container = styled.div`
  background-color: #273135;
`;

const Description = styled.div`
  color: #89949B;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
 
`;

const SideBottomMenu = (props) => {


  const contentLinksKeys = Object.keys(props.contentLinks);
  const linkObject = props.contentLinks;
  let linkList = contentLinksKeys.map(ele => {
    let ulComponent = null;
    const linkAttributes = linkObject[ele].linkAttributes;
    const subLinks = linkObject[ele].subLinks;  
    const expandLinks = linkAttributes.expandFunction ? props.expandLinks : null;
    let count = null;  

    if (subLinks != null ){
      const subLinkKeys = Object.keys(subLinks);
      count = subLinkKeys.length;
      ulComponent = props.showSubLinks ?  <ul style={{listStyleType: "none"}} > {subLinkKeys.map(ele => {
        let subLinksAttributes = subLinks[ele];

        return <ListItemLink count={null} expandLinks={null} icon={subLinksAttributes.icon} to={subLinksAttributes.to} key={subLinksAttributes.title}>{subLinksAttributes.title}</ListItemLink>
      })} </ul>  : null;              
    }
    console.log("count", count);
    return <ListItemLink count={count} expandLinks={expandLinks} icon={linkAttributes.icon} to={linkAttributes.to} key={linkAttributes.title} ul={ulComponent}>{linkAttributes.title}</ListItemLink>

  })



  return (
    <Container>
      <Description>Navigation Pages</Description>
      <nav>
        <List>         
          {linkList}
        </List>
      </nav>
    </Container>
  )
}


export default SideBottomMenu;