import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: ${props => props.theme.horizontal};
  height: 100vh;
  background: ${props => props.backgroundColor};
  display: inline-block;
  position: fixed;
  transition: transform ${props => props.theme.transitionTime} ease-out;
  overflow: auto;
  max-width: 100vw;
  overflow-x: hidden;

  @media (max-width: ${props => props.mediaQuery}) {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }

  ${ props => props.showToggleMenu && css`
  @media (min-width: 1px) {

      transform: translateX(0);
      -webkit-transform: translateX(0);
    }
  `};  
`;

