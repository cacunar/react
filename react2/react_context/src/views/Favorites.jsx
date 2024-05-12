import React from 'react';
import { usePhotos } from '../context/PhotoContext'; 

const Favorites = () => {
  const { photos } = usePhotos(); 
  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo) => ( 
          <div key={photo.id} className="gallery-item">
            <img src={photo.src.portrait} alt={photo.alt} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
