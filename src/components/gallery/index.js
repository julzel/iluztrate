import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Gallery.scss";
// import GalleryPlaceholder from "../../assets/gallery_placeholder.png";
import gallery_1 from "../../assets/gallery/gallery_1.jpeg";
import gallery_2 from "../../assets/gallery/gallery_2.jpeg";
import gallery_3 from "../../assets/gallery/gallery_3.jpeg";
import gallery_4 from "../../assets/gallery/gallery_4.jpeg";

const Gallery = () => {
  return (
    <div className="gallery">
      <Carousel showThumbs={false} showStatus={false} showIndicators={true}>
        <div>
          <img src={gallery_1} alt="gallery" />
        </div>
        <div>
          <img src={gallery_2} alt="gallery" />
        </div>
        <div>
          <img src={gallery_3} alt="gallery" />
        </div>
        <div>
          <img src={gallery_4} alt="gallery" />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
