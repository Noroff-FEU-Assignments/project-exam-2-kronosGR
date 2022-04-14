import Head from 'next/head';
import Image from 'next/image';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';

export default function Admin() {
  return (
    <LayoutAdmin>
      <h1>ADMIN PANEL</h1>
      Messages Enquiries
    </LayoutAdmin>
  );
}
