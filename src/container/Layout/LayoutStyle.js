import styled, {css} from 'styled-components';



const BodyContainer = styled.div`
  margin-top: ${props => props.theme.verticle};
  margin-left: ${props => props.theme.horizontal};
 
  -webkit-box-flex: 1 0 auto;
  flex: 1 0 auto;
 
  border: 1px solid purple;
  position: relative;
  left: 0;
  transition: margin-left ${props => props.theme.transitionTime} ease-out;
  @media (max-width: ${props => props.theme.mediaQuery}) {
    margin-left: 0;
  };

  ${ props => props.showToggleMenu && css`
    @media (min-width: 1px) {
      margin-left: ${props => props.theme.horizontal};

    }
  `};
 
`;

const ContentContainer = styled.main`
  margin: 10px auto;
  border: 1px solid red;

  width: 98%;
  @media(max-width: 405px) {
    /* margin: 0 auto; */
    width: 350px;
 

  }
  @media(max-width: 369px) {

    margin-left: auto;
    margin-right: auto;
    width: 310px;
 

  }

`;





const Title = styled.h1`
  border: 10px solid red;
 /* margin: 150px; */
`;


const Style = { Title, ContentContainer, 
                BodyContainer};

export default Style;