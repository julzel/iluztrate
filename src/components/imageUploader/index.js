import React from "react";

import './ImageUploader.scss';

const ImageUploader = ({id, onFileUpload}) => {
  return (
    <div className="image-uploader">
      <input
        type="file"
        id={id}
        name={id}
        accept="image/*"
        onChange={onFileUpload}
      />
    </div>
  );
};

export default ImageUploader;
