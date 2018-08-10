
import React from 'react';
import TechIcon from './TechIcons/TechIcon';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
`

const TechIconsContainer = (props) => {
  console.log("ele", props.size);
  const icons = props.iconsInfo.map(ele => {
   
    return <TechIcon key={ele.title} size={ele.size} title={ele.title} icon={ele.icon} color={ele.color}/>
  })

  return (
    <Container>
      {icons}
    </Container>
  )
}

export default TechIconsContainer;