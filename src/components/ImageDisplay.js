import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDisplay = ({ images }) => {
  const { imageName } = useParams();
  const imageUrl = images[imageName];
  if (!imageUrl) {
    return <div>Imagem não encontrada</div>;
  }
  
  return (
    <div className="image-display">
      <img src={imageUrl} alt={imageName} />
    </div>
  );
};

export default ImageDisplay;
