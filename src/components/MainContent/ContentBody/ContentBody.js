import React from 'react';
import Style from './ContentBodyStyle';

const ContentBody = (props) => {

  return (
    <Style.BodyContainer mediaQuery={props.mediaQuery} showToggleMenu={props.showToggleMenu}>

    <Style.ContentContainer >
      <Style.Title>HI THERE</Style.Title>
        {props.children}
      </Style.ContentContainer >
    </Style.BodyContainer>
  )
}

export default ContentBody;