
import React from 'react';
import Style from './HeaderBtnsStyle'

const HeaderBtns = (props) => {

  return (
    
    <Style.HeaderBtn>{props.children}</Style.HeaderBtn>

  )
}

export default HeaderBtns;