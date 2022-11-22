import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <br />
      <h1>Ничего не найдено </h1>
      <br />
      <p className={styles.description}>К сожалению данная страница отсутствует в нашем Сайте</p>
    </div>
  );
};

export default NotFoundBlock;
