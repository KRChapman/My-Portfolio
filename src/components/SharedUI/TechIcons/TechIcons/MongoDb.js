import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import styled from '../../../../../node_modules/styled-components';

const Icon = styled(FontAwesomeIcon)`


`
const Span = styled.span`
  font-size: 10px;
 color: green;
`

const MongoDb = (props) => {

  return (
    <div><Span title="MongoDB"><Icon icon={faLeaf} aria-hidden="false" ></Icon></Span></div>
  )
}

export default MongoDb;