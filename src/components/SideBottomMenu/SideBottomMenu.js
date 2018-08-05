import React from 'react';
import styled from 'styled-components';

import ListItemLink from './MenuListItems/ListItemLink/ListItemLink';



const Description = styled.div`
  color: #7c7d7d;
  margin: 20px;
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
    const isShowSubLinks = linkObject[ele].showSubLinks != null ? linkObject[ele].showSubLinks : null;  
    const expandLinks = linkAttributes.expandFunction ? props.expandLinks : null;
    let count = null;  

    if (subLinks != null ){
      const subLinkKeys = Object.keys(subLinks);
      count = subLinkKeys.length;
      ulComponent = isShowSubLinks ?  <ul style={{listStyleType: "none"}} > {subLinkKeys.map(ele => {
        let subLinksAttributes = subLinks[ele];

        return <ListItemLink textColor={props.textColor} count={null} expandLinks={null} icon={subLinksAttributes.icon} to={subLinksAttributes.to} key={subLinksAttributes.title}>{subLinksAttributes.title}</ListItemLink>
      })} </ul>  : null;              
    }

    return <ListItemLink textColor={props.textColor}  count={count} name={ele} expandLinks={expandLinks} icon={linkAttributes.icon} to={linkAttributes.to} key={linkAttributes.title} ul={ulComponent}>{linkAttributes.title}</ListItemLink>

  })



  return (
    <div>
      <Description>Navigation Pages</Description>
      <nav>
        <List>         
          {linkList}
        </List>
      </nav>
    </div>
  )
}


export default SideBottomMenu;