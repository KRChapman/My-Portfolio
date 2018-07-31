//main #273135

import styled, {css} from 'styled-components';

const Container = styled.header`
  margin-left: ${props => props.theme.horizontal};
  position: fixed;
  right: 0;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  height: ${props => props.theme.verticle};
  width: calc(100% - ${props => props.theme.horizontal});
  transition: width ${props => props.theme.transitionTime} ease-out;
  z-index: ${props => props.theme.zindexHighest};

  @media (max-width: ${props => props.mediaQuery}) {
    width: 100%;
  }

  ${ props => props.showToggleMenu && css`
  @media (min-width: 1px) {
    width: calc(100% - ${props => props.theme.horizontal});
    }
  `};
             
 
`;
    
const NavBtnsContainer = styled.nav`
  display: flex;
  width: 300px;
  height: 100%;
  justify-content: space-around;
`;

const Title = styled.h2`
  color: #fff;
  margin-left: 5px;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const Style = { Container, NavBtnsContainer, Title}

export default Style;