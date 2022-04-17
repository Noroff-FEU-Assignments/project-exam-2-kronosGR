import Layout from '../components/Layout/Layout';
import FormInput from '../components/Form/FormInput';
import Spacer from '../components/Layout/Spacer';
import Center from '../components/Layout/Center';
import Button from '../components/Button';
import { Colors } from '../constants/Colors';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {
    console.log(email, password);
  };

  return (
    <Layout>
      <h1 className='mb60'>Login</h1>
      <form>
        <FormInput
          value={email}
          setValue={setEmail}
          title='Email'
          placeholder='Enter your email'
          id='email'
          type='text'
        />
        <Spacer size='30px' />
        <FormInput
          value={password}
          setValue={setPassword}
          title='Password'
          placeholder='Enter your password'
          id='password'
          type='password'
        />
        <Spacer size='60px' />
        <Center>
          <Button
            svg='/icons/send.svg'
            onClick={clickHandler}
            color={Colors.white}
            width={150}
            title='Login'
          />
        </Center>
      </form>
    </Layout>
  );
}
