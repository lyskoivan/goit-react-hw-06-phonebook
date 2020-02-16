import React from 'react';

import styles from './Message.module.css';

const Message = () => {
  return (
    <div className={styles.Message}>
      <p className={styles.Message__text}>Contact already exists</p>
    </div>
  );
};

export default Message;
