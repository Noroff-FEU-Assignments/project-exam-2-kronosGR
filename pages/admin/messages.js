import { useEffect } from 'react';
import Auth from '../../components/Auth/Auth';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import { MessageList } from '../../components/Messages/MessageList';
import { getMessages } from '../../BackEnd/getMessages';
import { Error } from '../../components/Error';

export default function Messages({ messages, error }) {
  console.log(messages);
  return (
    <LayoutAdmin>
      <Auth />
      <h1 className='mb60'>Messages</h1>
      <MessageList messages={messages} />
      <Error msg='Something went wrong' error={error} />
    </LayoutAdmin>
  );
}

export async function getServerSideProps() {
  const res = await getMessages();
  console.log(res.error);

  return {
    props: {
      messages: res.result,
      error: res.error,
    },
  };
}
