import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAccommodationById } from '../BackEnd/getAccommodationById';
import Spacer from '../components/Layout/Spacer';
import Layout from '../components/Layout/Layout';
import { AccommodationCarousel } from '../components/Accommodations/AccommodationCarousel';

import styles from '../styles/enquire.module.css';
import { useState } from 'react';
import { Toast } from '../components/Layout/Toast';
import FormInput from '../components/Form/FormInput';

const enquireSchema = yup.object().shape({
  fullname: yup.string().required('Please enter your full name'),
  message: yup.string().required('Please enter the enquiry message'),
  phone: yup
    .number()
    .required('Please enter your phone number')
    .typeError('It must be a number'),
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Please enter your email'),
  from: yup.date().required('Please select date'),
  to: yup.date().required('Please select date'),
});

export default function Enquire({ accommodation, error }) {
  const [errorLocal, setErrorLocal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(enquireSchema) });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      setIsVisible(true);
    } catch (err) {
      console.log(err);
      setErrorLocal(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Toast message='Enquire sent' isVisible={isVisible} setIsVisible={setIsVisible} />
      <Spacer size={30} />
      <h1>{accommodation.name}</h1>
      <div className={styles.container}>
        <AccommodationCarousel item={accommodation} />
        <p className={styles.description}>{`${accommodation.description.substr(
          0,
          100
        )}...`}</p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <FormInput
            id='fullname'
            title='Full Name'
            type='text'
            placeholder='Enter your full name'
            register={{ ...register('fullname') }}
          />
        </form>
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
