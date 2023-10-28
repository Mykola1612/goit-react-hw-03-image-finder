import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ elements, handleUrlOnClick }) => {
  const handleUrlOnClickComponent = bigPhoto => {
    console.log(bigPhoto);
    handleUrlOnClick(bigPhoto);
  };

  return elements.map(element => (
    <li
      key={element.id}
      className={styles[`ImageGalleryItem`]}
      onClick={() => handleUrlOnClickComponent(element.largeImageURL)}
    >
      <img
        src={element.webformatURL}
        className={styles[`ImageGalleryItem-image`]}
        alt={element.tags}
      />
    </li>
  ));
};
export default ImageGalleryItem;
