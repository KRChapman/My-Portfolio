import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  color: #d3bcbc;
  padding: 10px;
`;

const Features = (props) => {

  return (
    <Container>
      <h5>Features</h5>  
      <div> Change the primary and Secondary colors </div>
      <br />
      <div> Generate random selection of available colors</div>
      <br />
      <div> Customize box shadow spread and opacity of projects card</div>
      <br />
      <div>Save changes to local storage or reset to default</div>
      <br />
      <div> Toggle hide projects On individual pages</div>
      <br />
      <div>Expand and colapse links</div>
      <br /> 
      <div> Press arrow to slide menu and page over</div>
      <br />

    </Container>
  )
}

export default Features;