import React from 'react';
import Card from '../../SharedUI/Card/Card';
import map from './../../../assets/images/maps.png';

import adminT from './../../../assets/images/opensource/test/admin-events.png';
const OpenSource = (props) => {
  const pictureStyle = { marginLeft: "-1px" }
  return (
    
    <div>
      <Card src={map} pictureStyle={pictureStyle}>
        <p>write as a case study
You have written no case studies. Demonstrating your work isn't enough in today's market, you need to write case studies to outline what problems you faced and how you overcame them. It highlights your design/development process and displays it to employers.
 I don't know if you can work well with others. Software development is inherently about people ( built by people with other people for an audience of people ).
</p>
      </Card >

      <Card src={adminT} containerStyle={{"width": "500px"}} pictureStyle={pictureStyle}>

      </Card >
      HI</div>
  )
}

export default OpenSource;