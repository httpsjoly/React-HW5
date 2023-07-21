import React, { useState } from 'react';
import Photos from './Photos';

const Albums = ({ userId }) => {
  const [albums, setAlbums] = useState([]);
  const [openAlbumId, setOpenAlbumId] = useState(null);

  const handleAlbumClick = () => {
    if (openAlbumId === null) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => setAlbums(data))
        .catch((error) => console.error('Error fetching albums:', error));
    }
    setOpenAlbumId((prev) => (prev === null ? userId : null));
  };

  return (
    <div>
      <button onClick={handleAlbumClick}>{openAlbumId === null ? 'Album' : 'Close Album'}</button>
      {openAlbumId === userId && (
        <div>
          {albums.map((album) => (
            <div key={album.id}>
              <p>{album.title}</p>
              <Photos albumId={album.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Albums;