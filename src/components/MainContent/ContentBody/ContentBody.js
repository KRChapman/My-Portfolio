import React from 'react';
import Style from './ContentBodyStyle';
import BackGroundPicture from '../../SharedUI/BackGroundPicture/BackGroundPicture';
import Footer from '../../SharedUI/Footer/Footer';

const ContentBody = (props) => {
  
  return (

    <React.Fragment>
    <Style.BodyContainer mediaQuery={props.mediaQuery} showToggleMenu={props.showToggleMenu}>
      <BackGroundPicture backgroundpic={props.backgroundpic} />
      
      <Style.ContentContainer >
        <Style.Title></Style.Title>
          {props.children}
      </Style.ContentContainer >

        <Footer> </Footer> 
    </Style.BodyContainer>
      
      
    </React.Fragment>
  )
}

export default ContentBody;