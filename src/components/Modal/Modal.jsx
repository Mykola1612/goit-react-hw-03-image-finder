import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ photo }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={photo} alt="Photo" />
      </div>
    </div>
  );
};

export default Modal;
