import React from 'react';
import styles from './Loader.module.css';
import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.LoaderCenter}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};
export default Loader;
