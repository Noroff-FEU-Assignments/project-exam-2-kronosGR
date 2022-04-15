import Link from 'next/link';
import Button from '../../components/Button';
import Center from '../../components/Layout/Center';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import Spacer from '../../components/Layout/Spacer';
import { Colors } from '../../constants/Colors';

import styles from '../../styles/Admin.module.css';

export default function Admin() {
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
        <Button url='/admin/' color={Colors.white} width={150} title='Add' />
      </Center>
    </LayoutAdmin>
  );
}
