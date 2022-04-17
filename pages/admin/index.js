import Link from 'next/link';
import Router from 'next/router';
import Button from '../../components/Button';
import Center from '../../components/Layout/Center';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import Spacer from '../../components/Layout/Spacer';
import { Colors } from '../../constants/Colors';

import styles from '../../styles/Admin.module.css';

export default function Admin() {
  const clickHandler = () => {
    Router.push('/admin/add');
  };
  return (
    <LayoutAdmin>
      <h1 className='mb60'>ADMIN PANEL</h1>
      <Link href='/admin/messages'>
        <a className={styles.link}>Messages</a>
      </Link>
      <Link href='/admin/enquires'>
        <a className={styles.link}>Enquiries</a>
      </Link>
      <Spacer size='60px' />
      <Center>
        <Button
          onClick={clickHandler}
          color={Colors.white}
          width={150}
          title='Add'
          svg='/icons/add.svg'
        />
      </Center>
    </LayoutAdmin>
  );
}
