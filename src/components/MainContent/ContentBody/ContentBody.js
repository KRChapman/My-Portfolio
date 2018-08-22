import React from 'react';
import { BodyContainer, ContentContainer } from './ContentBodyStyle';
import BackGroundPicture from '../../SharedUI/BackGroundPicture/BackGroundPicture';
import Footer from '../../SharedUI/Footer/Footer';

const ContentBody = (props) => {
  
  return (

    <React.Fragment>
    <BodyContainer mediaQuery={props.mediaQuery} showToggleMenu={props.showToggleMenu}>
      <BackGroundPicture backgroundpic={props.backgroundpic} />    
        <ContentContainer showToggleMenu={props.showToggleMenu} >
          {props.children}
      </ContentContainer >
        <Footer> </Footer> 
    </BodyContainer>    
    </React.Fragment>
  )
}

export default ContentBody;