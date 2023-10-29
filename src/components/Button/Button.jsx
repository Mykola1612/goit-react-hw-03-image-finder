import React from 'react';
import styles from './Button.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Button = ({ page, per_page, totalHits, handleOnClick }) => {
  const handleOnClickButton = () => {
    const howPage = Math.ceil(totalHits / per_page);
    if (page > howPage) {
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    } else {
      page += 1;
      handleOnClick(page);
      return;
    }
  };

  return (
    <section className={styles.containerButton}>
      <button className={styles.Button} onClick={handleOnClickButton}>
        Load more
      </button>
    </section>
  );
};

export default Button;
