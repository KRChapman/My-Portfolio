import React from 'react';

import Style from './BoxShadowStyle'



const BoxShadowModal = (props) => {
  console.log("props.boxSpread", props);
  const boxShadowNumber = props.boxSpread.replace("px", "");
  const boxOpacicty = props.boxOpacicty * 100;
  return (
    <div>
      <h5 style={{ marginBottom: "4px" }}>Box Shadow Spread</h5>
      <span>{props.boxSpread}</span>
      <div style={{ width: "80%", margin: "1px auto", display: "flex" }}>
        <span>0</span> <Style.SliderAll onChange={props.changeBoxShadow} value={boxShadowNumber} type="range" min="0" max="100" name="spread"/><span>100</span>
      </div>  
      <h5 style={{marginBottom: "4px"}}>Box Shadow Opacity</h5>
      <span>{props.boxOpacicty}</span>
      <div style={{ width: "80%", margin: "1px auto" , display: "flex"}}>
        <span>0</span> <Style.SliderAll onChange={props.changeBoxShadow} value={boxOpacicty} type="range" min="0" max="95" name="opacity" /><span>.95</span>
      </div>
 
    </div>
  )
}

export default BoxShadowModal;