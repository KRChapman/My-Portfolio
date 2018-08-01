import React from 'react';

import Style from './BoxShadowStyle'



const BoxShadowModal = (props) => {

  return (
    <div>
      <h5>Box Shadow Spread</h5>
      <div style={{ width: "80%", margin: "1px auto", display: "flex" }}>
        <span>0</span> <Style.SliderAll type="range" /><span>100</span>
      </div>   
      <h5>Box Shadow Opacity</h5>
      <div style={{ width: "80%", margin: "1px auto" , display: "flex"}}>
        <span>0</span> <Style.SliderAll type="range" /><span>100</span>
      </div>
 
    </div>
  )
}

export default BoxShadowModal;