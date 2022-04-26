import React from 'react';
import { MessageItem } from './MessageItem';

import styles from '../../styles/MessagesList.module.css';

export const MessageList = ({ messages }) => {
  return (
    <div className={styles.container}>
      {messages && messages.map((item, i) => <MessageItem item={item} key={i} />)}
    </div>
  );
};
