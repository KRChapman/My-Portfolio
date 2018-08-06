import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from '../../../../../node_modules/styled-components';

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  

`
const Span = styled.span`
  font-size: ${props => props.size};
  margin-left: 8px;
  margin-right: 8px;


`


const TechIcon = (props) => {

  return (
    <div><Span size={props.size} title={props.title}><Icon color={props.color} icon={props.icon} aria-hidden="false" ></Icon></Span></div>
  )
}

export default TechIcon;