import React from 'react';
import { MessageItem } from './MessageItem';

import styles from '../../styles/MessagesList.module.css';
import { PropTypes } from 'prop-types';

export const MessageList = ({ messages }) => {
  return (
    <div className={styles.container}>
      {messages && messages.map((item, i) => <MessageItem item={item} key={i} />)}
      {messages && messages.length === 0 && <span>No messages</span>}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
};
