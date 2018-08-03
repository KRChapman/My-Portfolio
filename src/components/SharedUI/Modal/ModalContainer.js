import React from 'react';
import styled, {css} from 'styled-components';
import ColorModal from './ModalContent/ColorModal';
import BoxShadowModal from './ModalContent/BoxShadowModal';
import ControlBtns from './ControlBtns/ControlBtns';

const Container = styled.div`
  width: 300px;
  background-color: #fff;
  position: absolute;
  z-index: 600;

  

  right: 6px;
  top: -175px;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
  

   transition: top ${props => props.theme.transitionTime } ease-in; 
  ${props => (props.isColor || props.isSettings) && css`
     top: 75px; 
    /* -webkit-transform: translateY(0); */
  
  `}

`;
//
// transform: translateY(-100 %);
 
// transform: translateY(0);
// -webkit - transform: translateX(0);
const ControlBtnContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;

 
 
  


`;

const Test = styled.div`
  & > div{
    visibility:hidden 
  }
`



const ModalContainer = (props) => {
  // const base =  <BoxShadowModal changeBoxShadow={props.changeBoxShadow}
  //                                           boxOpacicty={props.boxOpacicty} 
  //                                           boxSpread={props.boxSpread} />
 
  const base = !props.isSettings && !props.isColor ? <div style={{width: "100%", height: "150px"}}></div>  : null;  

  const colorModal = props.isColor ?  <ColorModal selectRandomColor={props.selectRandomColor} selectColor={props.selectColor} /> : null;

  const boxShadowModal = props.isSettings ? <BoxShadowModal changeBoxShadow={props.changeBoxShadow}
    boxOpacicty={props.boxOpacicty}
    boxSpread={props.boxSpread} /> : null;
  return (
    <Container isSettings={props.isSettings} isColor={props.isColor}>
        {base}
        {boxShadowModal}    
        {colorModal}

   
      
     
    
      <ControlBtnContainer>
        <ControlBtns clicked={null} clickClose={props.closeOptions} color={"#f0ad4e"}>Close</ControlBtns>
        <ControlBtns clicked={props.saveToLocalStorage} clickClose={props.closeOptions}  color={"#388038"}>Local Storage Save</ControlBtns>
        <ControlBtns clicked={props.resetToDefaults} clickClose={null} color={"#323d32"}>Reset</ControlBtns>
      </ControlBtnContainer>    
    </Container>
  )
}
//      <ColorModal />

export default ModalContainer;