import React, { useEffect } from 'react';
import { usePhotos } from '../context/PhotoContext'; 
import IconHeart from './IconHeart';

const Gallery = () => {
  const { photos, setPhotos, toggleLike } = usePhotos();

  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => {
        const initializedPhotos = data.photos.map(photo => ({
          ...photo,
          liked: photo.liked ?? false
        }));
        setPhotos(initializedPhotos);
      })
      .catch(error => console.error('Error fetching photos:', error));
  }, [setPhotos]);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div key={photo.id} className="gallery-item" style={{ position: 'relative', margin: '5px' }}>
          <IconHeart filled={photo.liked} onClick={() => toggleLike(photo.id)} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', zIndex: 1000 }} />
          <img src={photo.src.portrait} alt={photo.alt} style={{ width: '100%', height: 'auto' }} />
          <p>{photo.photographer}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
