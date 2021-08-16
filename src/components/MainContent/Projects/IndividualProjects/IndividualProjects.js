import React from 'react';
import styled from 'styled-components';
import TechIcons from '../../../SharedUI/TechIcons/TechIconsContainer';
import ControlBtns from '../../../SharedUI/Modal/ControlBtns/ControlBtns';

const Header = styled.h5`
  margin: 10px;
  margin-left: 1px;
`;

const Para = styled.p`
  margin: 1px;
  font-size: 15px;
  line-height: 1.4;
`;

const Anchor = styled.a`
  width: 55px;
  text-align: center;
  font-size: 10px;
  color: #41505a;
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const ButtonContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  & > button{
    color: #8d8d8d;
    pointer-events: ${props => (props.isDesktop ? 'auto' : 'none')};

    visibility:  ${props => (props.isDesktop ? 'visible' : 'hidden')};;
  }
`;



const IndividualProjects = (props) => {
  let paragraph = null;
  if (typeof props.textInfo === "string") {
    paragraph = <Para>
                  {props.textInfo}
                </Para>;
  }
  else{
    paragraph = props.textInfo;
  }

  let btnText = props.projectOpacity === 1 ? "Zoom In" : "Return"

  return (
    <div>
      <HeaderContainer>
        <Header>{props.header}</Header><TechIcons iconsInfo={props.iconsInfo} />
      </HeaderContainer>
      {paragraph}
      <ButtonContainer isDesktop={props.isDesktop}>
       <Anchor target='_blank' href={props.link}>GitHub</Anchor>
      </ButtonContainer>   
      {props.chidlren}
    </div>
  )
}
{/* <ControlBtns clicked={() => props.hideProject(props.route, props.header, props.projectOpacity)}
  clickClose={null}>{btnText}</ControlBtns> */}
export default IndividualProjects;