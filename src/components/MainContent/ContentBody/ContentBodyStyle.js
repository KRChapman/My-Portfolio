import styled, { css } from 'styled-components';

const BodyContainer = styled.div`
  margin-top: ${props => props.theme.verticle};
  margin-left: ${props => props.theme.horizontal};

 
  position: relative;
  background-color: #E9F0F5;
   /* #E9F0F5; */
   /* #d7dfe5; */

  width: 100%;
  /* height: 100%; */

  left: 0;
  z-index: ${props => props.theme.zindexMiddle};
  transition: margin-left ${props => props.theme.transitionTime} ease-out;
  
  @media (max-width: ${props => props.mediaQuery}) {
       margin-left: 0; 
  };

  ${ props => props.showToggleMenu && css`
     @media (min-width: 1px) {
      margin-left: ${props => props.theme.horizontal};   
      };
  `};

 
`;

const ContentContainer = styled.main`
  margin: 10px auto;
  /* border: 1px solid red; */
  width: 99%;
  /* display: flex;
  flex-wrap: wrap; */
  /* max-width: 1400px; */
  @media(max-width: 405px) {
    width: 350px;
  }
  @media(max-width: 369px) {

    margin-left: auto;
    margin-right: auto;
    width: 310px;
  }
`;

const Title = styled.span`
  /* border: 10px solid red; */
  width: 100px;
  margin: 0;
`;


const Style = {
  Title, ContentContainer,
  BodyContainer
};

export default Style;