import styles from './ImageGallery.module.css';
import React from 'react';

const ImageGallery = ({ children }) => {
  return <ul className={styles.ImageGallery}>{children}</ul>;
};

export default ImageGallery;
