import React from 'react';
import { MessageItem } from './MessageItem';

export const MessageList = ({ messages }) => {
  return (
    <div>
      {messages && messages.map((item, i) => <MessageItem item={item} key={i} />)}
    </div>
  );
};
