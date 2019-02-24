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


const UlSubLinks = styled.ul`
  list-style-type: none;

  transition: height .5s ease-out;
   overflow: hidden;
  height: ${ props => props.height + "px"};


`;


const SideBottomMenu = (props) => {
  const contentLinksKeys = Object.keys(props.contentLinks);
 
  let indexToCut = contentLinksKeys.indexOf("hiddenProjects");


  let isVisable = props.hiddenProjects.some(function (element){
   return   element.route === props.projectPath;
  });

  if (!isVisable){
       contentLinksKeys.splice(indexToCut,1);
  }

  const linkObject = props.contentLinks;

  let linkList =  contentLinksKeys.map(ele => {
    let ulComponent = null;
    
    const linkAttributes = linkObject[ele].linkAttributes;
    const subLinks = linkObject[ele].subLinks;
    const isShowSubLinks = linkObject[ele].showSubLinks != null ? linkObject[ele].showSubLinks : null;  
    const expandLinks = linkAttributes.expandFunction ? props.expandLinks : null;
    const showProject = ele === "hiddenProjects" ? props.showProject : null;
    let count = null;  

    ({ count, ulComponent } = createUl(subLinks, count, isShowSubLinks, linkObject, ele, props, ulComponent, showProject));

    return <ListItemLink textColor={props.textColor} height={props.height} count={count} name={ele} expandLinks={expandLinks} icon={linkAttributes.icon} 
             ul={ulComponent} to={linkAttributes.to} key={linkAttributes.title} closeMenu={props.closeMenu} isDesktop={props.isDesktop}
             >{linkAttributes.title} 
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

function createUl(subLinks, count, isShowSubLinks, linkObject, ele, props, ulComponent, showProject) {
  if (subLinks != null) {
    const subLinkKeys = Object.keys(subLinks);
    count = isShowSubLinks ? null : subLinkKeys.length;
    let height = isShowSubLinks ? Object.keys(linkObject[ele].subLinks).length * props.height : 0;
    ulComponent = <UlSubLinks height={height}>
      {subLinkKeys.map(ele => {
        let subLinksAttributes = subLinks[ele];
        return <ListItemLink textColor={props.textColor} count={null} 
        expandLinks={null} isDesktop={props.isDesktop} icon={subLinksAttributes.icon}
         to={subLinksAttributes.to} key={subLinksAttributes.title} height={props.height} 
         showProject={showProject} closeMenu={props.closeMenu}>{subLinksAttributes.title}
        </ListItemLink>;
      })}
    </UlSubLinks>;
  }
  return { count, ulComponent };
}
