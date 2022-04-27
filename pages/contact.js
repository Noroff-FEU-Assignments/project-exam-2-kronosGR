import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Toast } from '../components/Layout/Toast';
import Layout from '../components/Layout/Layout';
import FormInput from '../components/Form/FormInput';
import { useState } from 'react';
import FormTextArea from '../components/Form/FormTextArea';
import Spacer from '../components/Layout/Spacer';
import { Colors } from '../constants/Colors';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Center from '../components/Layout/Center';
import { sendMessage } from '../BackEnd/sendMessage';
import Head from 'next/head';

const contactSchema = yup.object().shape({
  username: yup.string().required('Please enter your name'),
  phone: yup
    .number()
    .required('Please enter your phone number')
    .typeError('It must be a number'),
  email: yup
    .string()
    .email('Enter a valid email addres')
    .required('Please enter your email'),
  message: yup.string().required('Please enter your message'),
});

export default function Contact() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await sendMessage(data);
      if (res.error) throw new Error('Error');
      setIsVisible(true);
      reset();
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Holidaze | Contact Us</title>
      </Head>
      <Toast message='Message sent' isVisible={isVisible} setIsVisible={setIsVisible} />
      <h1 className='mb60'>Contact US</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '80%' }}>
        <FormInput
          id='username'
          title='Name'
          type='text'
          placeholder='Enter your name'
          register={{ ...register('username') }}
        />
        {errors.username && (
          <span className='alert-danger'>{errors.username.message}</span>
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
        {errors.message && <span className='alert-danger'>{errors.message.message}</span>}
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
      {isLoading && <Loader />}
      {error && (
        <Center>
          <div className='alert-danger'>There was a problem sending the message</div>
        </Center>
      )}
      <Spacer size={40} />
    </Layout>
  );
}
