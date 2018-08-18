import React from 'react';
import styled from 'styled-components';
import ListItemLink from './MenuListItems/ListItemLink/ListItemLink';

const Description = styled.div`
  color: #6c6c6c;
  margin: 24px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SideBottomMenu = (props) => {

  const contentLinksKeys = Object.keys(props.contentLinks);
  const linkObject = props.contentLinks;

  let linkList =  contentLinksKeys.map(ele => {
    let ulComponent = null;
    const linkAttributes = linkObject[ele].linkAttributes;
    const subLinks = linkObject[ele].subLinks;
    const isShowSubLinks = linkObject[ele].showSubLinks != null ? linkObject[ele].showSubLinks : null;  
    const expandLinks = linkAttributes.expandFunction ? props.expandLinks : null;
    const showProject = ele === "hiddenProjects" ? props.showProject : null;
    let count = null;  

    if (subLinks != null ){
      const subLinkKeys = Object.keys(subLinks);
      count = subLinkKeys.length;
      ulComponent = isShowSubLinks ?
        <ul style={{ listStyleType: "none" }} >
          {subLinkKeys.map(ele => {
            let subLinksAttributes = subLinks[ele];
            return <ListItemLink textColor={props.textColor} count={null} expandLinks={null}
                    icon={subLinksAttributes.icon} to={subLinksAttributes.to} key={subLinksAttributes.title}
                    showProject={showProject}>{subLinksAttributes.title} 
                  </ListItemLink>
          })} 
        </ul> : null;              
    }

    return <ListItemLink textColor={props.textColor}  count={count} name={ele} expandLinks={expandLinks} icon={linkAttributes.icon} 
             ul={ulComponent} to={linkAttributes.to} key={linkAttributes.title} >{linkAttributes.title}
           </ListItemLink>
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