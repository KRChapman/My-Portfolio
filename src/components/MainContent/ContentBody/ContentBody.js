import React from 'react';
import Style from './ContentBodyStyle';
import BackGroundPicture from '../../SharedUI/BackGroundPicture/BackGroundPicture';

const ContentBody = (props) => {
  
  return (
    <Style.BodyContainer mediaQuery={props.mediaQuery} showToggleMenu={props.showToggleMenu}>
      <BackGroundPicture backgroundpic={props.backgroundpic} />
      
      <Style.ContentContainer >
        <Style.Title></Style.Title>
          {props.children}
      </Style.ContentContainer >
    </Style.BodyContainer>
  )
}

export default ContentBody;