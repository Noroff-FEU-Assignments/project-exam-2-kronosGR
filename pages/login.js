import Router from 'next/router';
import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Layout from '../components/Layout/Layout';
import FormInput from '../components/Form/FormInput';
import Spacer from '../components/Layout/Spacer';
import Center from '../components/Layout/Center';
import Button from '../components/Button';
import { Colors } from '../constants/Colors';
import { useState } from 'react';
import { API_URL, AUTH } from '../constants/Api';

import styles from '../styles/Login.module.css';
import Loader from '../components/Loader';
import { saveToLocalStorage, USER } from '../utils/localStorage';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
});

export default function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post(API_URL + AUTH, {
        identifier: data.email,
        password: data.password,
      });

      if (res.statusText) {
        console.log(res);

        saveToLocalStorage(USER, res.data);
        Router.push('/admin');
      } else {
        setError('Login problem');
      }
    } catch (err) {
      console.log('login error', err);
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <h1 className='mb60'>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormInput
          title='Email'
          placeholder='Enter your email'
          id='email'
          type='text'
          register={{ ...register('email') }}
        />
        {errors.email && <span className='alert-danger'>{errors.email.message}</span>}
        <Spacer size='30px' />
        <FormInput
          title='Password'
          placeholder='Enter your password'
          id='password'
          type='password'
          register={{ ...register('password') }}
        />
        {errors.password && (
          <span className='alert-danger'>{errors.password.message}</span>
        )}
        <Spacer size='60px' />
        <Center>
          <Button
            svg='/icons/send.svg'
            type='submit'
            onClick={() => {}}
            color={Colors.white}
            width={150}
            title='Login'
          />
        </Center>
      </form>
      {isLoading && <Loader />}
      {error && (
        <Center>
          <div className='alert-danger'>Problem with login credentials</div>
        </Center>
      )}
    </Layout>
  );
}
