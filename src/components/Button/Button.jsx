import React from 'react';
import styles from './Button.module.css';

const Button = ({ handleOnClick }) => {
  return (
    <section className={styles.containerButton}>
      <button className={styles.Button} onClick={handleOnClick}>
        Load more
      </button>
    </section>
  );
};

export default Button;
