import React from 'react';
import image from '../images/me.jpg';
function Image() {
  return (
    <div className="imageContainer">
      <img className="imgSmall" src={image} />
    </div>
  );
}

export default Image;
