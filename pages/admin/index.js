import Link from 'next/link';
import Button from '../../components/Layout/Button';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
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
      <Button url='/admin/' color={Colors.white} width={150} title='Add' />
    </LayoutAdmin>
  );
}
