import Head from 'next/head';
import Image from 'next/image';
import FormInput from '../../components/Form/FormInput';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';

export default function Admin() {
  return (
    <LayoutAdmin>
      <h1 className='mb60'>Add</h1>
      <form>
        <FormInput
          id='name'
          title='Name'
          type='text'
          placeholder='Enter accommodation name'
        />
      </form>
    </LayoutAdmin>
  );
}
