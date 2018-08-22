import React from 'react';
import { Title, TitleContainer, SliderContainer, SliderAll} from './BoxShadowStyle'

const BoxShadowModal = (props) => {
  const boxShadowNumber = props.boxSpread.replace("px", "");
  const boxOpacicty = props.boxOpacicty * 100;
  
  return (
    <div>
      <TitleContainer >
        <Title >Box Shadow Spread</Title>
        <span>{props.boxSpread}</span>
      </TitleContainer >
      <SliderContainer >
        <span>0</span> 
        <SliderAll onChange={props.changeBoxShadow} value={boxShadowNumber} 
          type="range" min="0" max="100" name="spread"/>
        <span>100</span>
      </SliderContainer>  
      <TitleContainer>
        <Title >Box Shadow Opacity</Title>
      <span>{props.boxOpacicty}</span>
      </TitleContainer>
      <SliderContainer>
        <span>0</span> <SliderAll onChange={props.changeBoxShadow} value={boxOpacicty} type="range" min="0" max="95" name="opacity" /><span>.95</span>
      </SliderContainer>
 
    </div>
  )
}
//style={{ width: "80%", margin: "1px auto", display: "flex" }}
//style={{ marginBottom: "4px" }}
export default BoxShadowModal;