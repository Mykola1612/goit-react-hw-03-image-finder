import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ elements }) => {
  return elements.map(element => (
    <li key={element.id} className={styles[`ImageGalleryItem`]}>
      <img
        src={element.webformatURL}
        className={styles[`ImageGalleryItem-image`]}
        alt={element.tags}
      />
    </li>
  ));
};
export default ImageGalleryItem;
