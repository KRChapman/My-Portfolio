import styled from 'styled-components';



const BodyContainer = styled.div`
  margin-left: ${props => props.theme.horizontal};
  -webkit-box-flex: 1 0 auto;
  flex: 1 0 auto;
 
  border: 1px solid purple;
  position: relative;
  left: 0;

`;

const ContentContainer = styled.main`
  margin: ${props => props.theme.verticle} auto 0;
  border: 1px solid red;

  width: 90%;
`;





const Title = styled.h1`
  border: 10px solid red;
 /* margin: 150px; */
`;


const Style = { Title, ContentContainer, 
                BodyContainer};

export default Style;