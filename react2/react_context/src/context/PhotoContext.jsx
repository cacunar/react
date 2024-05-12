import React, { createContext, useState, useContext } from 'react';

const PhotosContext = createContext();

export const usePhotos = () => useContext(PhotosContext);

export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const toggleLike = (id) => {
    const updatedPhotos = photos.map(photo => ({
      ...photo,
      liked: photo.id === id ? !photo.liked : photo.liked
    }));
    setPhotos(updatedPhotos);
  };

  return (
    <PhotosContext.Provider value={{ photos, setPhotos, toggleLike }}>
      {children}
    </PhotosContext.Provider>
  );
};
