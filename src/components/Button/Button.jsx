import React from 'react';
import styles from './Button.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Button = () => {
  const handleOnClick = () => {
    Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  };

  return (
    <section>
      <button className={styles.Button} onClick={handleOnClick}>
        Load more
      </button>
    </section>
  );
};

export default Button;
