import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
   height: 100%; 
  display: flex;
  border: 1px solid green;
`;

const BodyContainer = styled.div`
  margin-left: ${props => props.leftMargin};
  -webkit-box-flex: 1 0 auto;
  flex: 1 0 auto;
  
  border: 1px solid purple;
  position: relative;
  left: 0;

`;

const ContentContainer = styled.main`
  margin: ${props => props.topMargin} auto 0;
  border: 1px solid red;

  width: 90%;
`;





const Title = styled.h1`
  border: 10px solid red;
 /* margin: 150px; */
`;


const Styled = { Title, ContentContainer, 
                BodyContainer, AppContainer};

export default Styled;