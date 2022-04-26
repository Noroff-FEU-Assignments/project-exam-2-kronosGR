import Auth from '../../components/Auth/Auth';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import { MessageList } from '../../components/Messages/MessageList';
import { getMessages } from '../../BackEnd/getMessages';
import { Error } from '../../components/Error';
import { useEffect, useState } from 'react';
import { loadFromLocalStorage, USER } from '../../utils/localStorage';

export default function Messages() {
  const [messages, setMessages] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = loadFromLocalStorage(USER);
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await getMessages(user.jwt);
        if (res.error) throw new Error('There was a problem');
        setMessages(res.result);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [messages]);

  return (
    <LayoutAdmin>
      <Auth />
      <h1 className='mb60'>Messages</h1>
      <MessageList messages={messages} />
      <Error msg='Something went wrong' error={error} />
    </LayoutAdmin>
  );
}
