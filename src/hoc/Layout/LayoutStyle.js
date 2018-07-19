import styled from 'styled-components';

const AppContainer = styled.div`
width: 100%;
height: 100%;

display: flex;

border: 1px solid green;

`

const BodyContainer = styled.div`
margin-left: ${props => props.leftMargin};

-webkit-box-flex: 1 0 auto;
flex: 1 0 auto;
/* width: 100%; */

border: 1px solid purple;
position: relative;
left: 0;

/* margin: ${props => props.leftMargin} 0 0; */
`

const ContentContainer = styled.main`
margin: ${props => props.topMargin} auto 0;
border: 1px solid red;
width: 90%;
`



//vertical-align:top;

//margin-left: ${props => props.left}

const Title = styled.h1`
border: 1px solid red;

`


const Styled = { Title, ContentContainer, BodyContainer, AppContainer};

export default Styled;