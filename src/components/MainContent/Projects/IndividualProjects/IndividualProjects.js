import React from 'react';
import styled from 'styled-components';
import TechIcons from '../../../SharedUI/TechIcons/TechIconsContainer';

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
`;

const HeaderContainer = styled.div`
  display: flex;
   align-items: baseline;

`;

const IndividualProjects = (props) => {

  return (
    <div>
      <HeaderContainer>
        <Header>{props.header}</Header><TechIcons iconsInfo={props.iconsInfo} />
      </HeaderContainer>
      <Para>
  
        {props.textInfo}
      </Para>
      <Anchor href={props.link}>GitHub</Anchor>
      {props.chidlren}
    </div>
  )
}

export default IndividualProjects;