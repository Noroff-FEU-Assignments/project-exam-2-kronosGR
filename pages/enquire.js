import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAccommodationById } from '../BackEnd/getAccommodationById';

export default function Enquire({ accommodation, error }) {
  return <div>Enquire</div>;
}

export async function getServerSideProps(context) {
  const res = await getAccommodationById(context.query.aid);
  console.log(res.error);
  return {
    props: { accommodation: res.result, error: res.error },
  };
}
