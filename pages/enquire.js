import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAccommodationById } from '../BackEnd/getAccommodationById';
import Spacer from '../components/Layout/Spacer';
import Layout from '../components/Layout/Layout';
import { AccommodationCarousel } from '../components/Accommodations/AccommodationCarousel';

import styles from '../styles/enquire.module.css';

export default function Enquire({ accommodation, error }) {
  return (
    <Layout>
      <Spacer size={30} />
      <h1>{accommodation.name}</h1>
      <div className={styles.container}>
        <AccommodationCarousel item={accommodation} />
        <p className={styles.description}>{`${accommodation.description.substr(
          0,
          100
        )}...`}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await getAccommodationById(context.query.aid);
  console.log(res.error);
  return {
    props: { accommodation: res.result, error: res.error },
  };
}
