import React, { Component } from 'react';
import styled from 'styled-components';

const ImageCrop = styled.div`


   width: 100%;
   height: 220px;
   overflow: hidden;

 

  background-size: cover;

  background-position: center;

   opacity: ${ props => props.opacity}; 

  transition: opacity 0.8s ease;
  @media (min-width: 1600px) {
        height: 250px;
        overflow: auto;
    }; 

`;


const ImagePreload = styled.div`
   width: 100%;
   height: 220px;
   overflow: hidden;

  background-image: url(${ props => props.pictureSmall});

  background-size: cover;

  background-position: center;
  position: absolute;
  z-index: -1;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-size: cover;
`;


class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0 }
    this.currentImageHd = null;
  }

  componentDidMount() {

    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;
    console.log("this.currentImageHd", this.currentImageHd);
    hdLoaderImg.onload = () => {
      this.currentImageHd.setAttribute(
        'style',
        `background-image: url('${this.props.srcLoaded}')`
      );


      this.setState({ opacity:  1});
    }

  };

  render() { 
  
    return ( 
      <React.Fragment>
        <ImageCrop opacity={this.state.opacity} innerRef={imageLoadedElem => this.currentImageHd = imageLoadedElem} >
      
        </ImageCrop >
        <ImagePreload pictureSmall={this.props.pictureSmall}/> 

      </React.Fragment>
     )
  }
}
//      this.currentImageHd.classList.add('iron-image-fade-in');

// picture={this.props.srcLoaded}   <div ref={imageLoadedElem => this.currentImageHd = imageLoadedElem}></div>
export default ImageDisplay;