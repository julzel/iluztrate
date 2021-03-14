import React from 'react';

import './Gallery.scss';
import GalleryPlaceholder from  '../../assets/gallery_placeholder.png';


const Gallery = () => {
  return (
    <div className="gallery">
      <img src={GalleryPlaceholder} alt="Gallery placeholder" />
    </div>
  );
}
 
export default Gallery;