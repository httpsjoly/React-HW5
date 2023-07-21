import React, { useState } from 'react';

const Photos = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);
  const [openPhotoId, setOpenPhotoId] = useState(null);

  const handlePhotoClick = () => {
    if (openPhotoId === null) {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((response) => response.json())
        .then((data) => {
          setPhotos(data);
          setOpenPhotoId(albumId);
        })
        .catch((error) => console.error('Error fetching photos:', error));
    } else {
      setPhotos([]);
      setOpenPhotoId(null);
    }
  };

  return (
    <div>
      <button onClick={handlePhotoClick}>
        {openPhotoId === null ? 'Photos' : 'Close Photos'}
      </button>
      {openPhotoId === albumId && (
        <div>
          {photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.url} alt={photo.title} width={300} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;




