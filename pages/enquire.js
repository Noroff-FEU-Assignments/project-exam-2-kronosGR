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
import FormTextArea from '../components/Form/FormTextArea';
import Button from '../components/Button';
import { Colors } from '../constants/Colors';
import { SpaceBetween } from '../components/Layout/SpaceBetween';
import SameLine from '../components/Layout/SameLine';
import { sendEnquire } from '../BackEnd/sendEnquire';
import Loader from '../components/Loader';
import Center from '../components/Layout/Center';
import { toStrapiDate } from '../utils/utils';
import Head from 'next/head';

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
  from: yup.date().required('Please select date').typeError('It must be a date'),
  to: yup.date().required('Please select date').typeError('It must be a date'),
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
    setErrorLocal(null);
    data.aid = accommodation.id;

    try {
      const res = await sendEnquire(data);
      data.from = toStrapiDate(data.from);
      data.to = toStrapiDate(data.to);
      if (res.error) throw new Error('Error');
      setIsVisible(true);
      reset();
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
      <Head>
        <title>Holidaze | Enquire</title>
      </Head>
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
          {errors.fullname && (
            <span className='alert-danger'>{errors.fullname.message}</span>
          )}
          <FormInput
            id='phone'
            title='Phone number'
            type='number'
            placeholder='Enter your phone number'
            register={{ ...register('phone') }}
          />
          {errors.phone && <span className='alert-danger'>{errors.phone.message}</span>}
          <FormInput
            id='email'
            title='Email'
            type='text'
            placeholder='Enter your email'
            register={{ ...register('email') }}
          />
          {errors.email && <span className='alert-danger'>{errors.email.message}</span>}
          <FormTextArea
            id='message'
            title='Message'
            placeholder='Enter your message'
            rows={10}
            register={{ ...register('message') }}
          />
          {errors.message && (
            <span className='alert-danger'>{errors.message.message}</span>
          )}
          <SameLine>
            <FormInput
              id='from'
              title='Date From'
              type='date'
              placeholder='../../..'
              width='90%'
              register={{ ...register('from') }}>
              {errors.from && <span className='alert-danger'>{errors.from.message}</span>}
            </FormInput>
            <FormInput
              id='to'
              title='Date to'
              type='date'
              placeholder='../../..'
              width='90%'
              register={{ ...register('to') }}>
              {errors.to && <span className='alert-danger'>{errors.to.message}</span>}
            </FormInput>
          </SameLine>

          <Spacer size={30} />
          <Button
            svg='/icons/send.svg'
            type='submit'
            onClick={() => {}}
            color={Colors.white}
            width={150}
            title='Send'
          />
        </form>
        <Spacer size={60} />
        {isLoading && <Loader />}
        {errorLocal && (
          <Center>
            <div className='alert-danger'>There was a problem sending the enquire</div>
          </Center>
        )}
        <Spacer size={40} />
      </div>
      <Spacer size={40} color={Colors.white} />
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
