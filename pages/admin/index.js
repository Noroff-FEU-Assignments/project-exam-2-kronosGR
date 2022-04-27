import Link from 'next/link';
import Router from 'next/router';
import Button from '../../components/Button';
import Center from '../../components/Layout/Center';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import Spacer from '../../components/Layout/Spacer';
import { Colors } from '../../constants/Colors';

import styles from '../../styles/Admin.module.css';
import Auth from '../../components/Auth/Auth';
import { useContext, useEffect, useState } from 'react';
import { getTotalUnreadMessages } from '../../BackEnd/getTotalUnreadMessages';
import { loadFromLocalStorage, USER } from '../../utils/localStorage';
import { getTotalUnreadEnquiries } from '../../BackEnd/getTotalUnreadEnquiries';
import { Error } from '../../components/Error';
import UserContext from '../../Contexts/UserContext';

export default function Admin() {
  const [totMsg, setTotMsg] = useState(0);
  const [totEnq, setTotEnq] = useState(0);
  const [error, setError] = useState(null);

  const [user, setUser] = useContext(UserContext);

  const clickHandler = () => {
    Router.push('/admin/add');
  };

  useEffect(() => {
    const userr = loadFromLocalStorage(USER);

    const getInfo = async () => {
      try {
        const msgTotal = await getTotalUnreadMessages(userr.jwt);
        const enqTotal = await getTotalUnreadEnquiries(userr.jwt);

        setTotMsg(msgTotal.result);
        setTotEnq(enqTotal.result);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    getInfo();
  }, []);

  return (
    <LayoutAdmin>
      <Auth />
      <h1 className='mb60'>ADMIN PANEL</h1>
      <Link href='/admin/messages'>
        <a className={styles.link}>{`${totMsg} unread Messages`}</a>
      </Link>
      <Link href='/admin/enquiries'>
        <a className={styles.link}>{`${totEnq} unread Enquiries`}</a>
      </Link>
      {error && <Error error={error} msg='Something went wrong. Sorry' />}
      <Spacer size='60' />
      <Center>
        <Button
          onClick={clickHandler}
          color={Colors.white}
          width={150}
          title='Add'
          svg='/icons/add.svg'
        />
      </Center>
      <Spacer size='60' />
    </LayoutAdmin>
  );
}
