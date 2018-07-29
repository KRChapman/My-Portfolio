import styled, {css} from 'styled-components';


const Container = styled.div`
  width: ${props => props.theme.horizontal};
  height: 1000px;

  background: blue;
  display: inline-block;
  position: fixed;
  transition: transform ${props => props.theme.transitionTime} ease-out;
  
 
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

const Styled = {Container};

export default Styled