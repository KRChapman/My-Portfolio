import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #d3bcbc;
  padding: 10px;
`;

const Anchor = styled.a`
  width: 100%;
  font-size: 12px;
  color: #d3bcbc;
  text-decoration: none;
`;

const Features = (props) => {

  return (
    <Container>
      <h5>Features</h5>  
      <div> Change the primary and Secondary colors </div>
      <br />
      <div> Generate random selection of available colors</div>
      <br />
      <div> Customize box shadow spread and opacity of project cards</div>
      <br />
      <div>Save changes to local storage or reset to default</div>
      <br />
      <div> Toggle hide projects per individual page</div>
      <br />
      <div>Expand and collapse links</div>
      <br /> 
      <div> Press arrow to slide menu and page over</div>
      <br />
      <Anchor target={"_blank"} href="https://github.com/KRChapman/My-Portfolio">Portfolio GitHub</Anchor>
    </Container>
  )
}

export default Features;