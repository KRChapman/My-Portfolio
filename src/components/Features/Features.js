import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  color: #d3bcbc;
  padding: 4px;
`;

const Features = (props) => {

  return (
    <Container>
      <h5>Features</h5>
      <div> Customize box shadow spread and opacity of Info Card</div>
      <br />
      <div> Customize box shadow spread and opacity of Info Card</div>
      <br />
      <div> Change the primary and Secondary colors </div>
      <br />
      <div> Random from the available colors</div>
      <br />
      <div>  Save changes to local storage or reset to default</div>
      <br />
      <div>Expand and Colapse links</div>
      <br />
      <div> Press arrow to slide menu and page over</div>
      <br />

    </Container>
  )
}

export default Features;