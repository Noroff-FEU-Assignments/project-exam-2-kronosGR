import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from '../../components/Form/FormInput';
import FormTextArea from '../../components/Form/FormTextArea';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import { useState } from 'react';
import Button from '../../components/Button';
import { Colors } from '../../constants/Colors';
import Loader from '../../components/Loader';
import Center from '../../components/Layout/Center';
import Spacer from '../../components/Layout/Spacer';
import SameLine from '../../components/Layout/SameLine';
import FormImage from '../../components/Form/FormImage';
import { ACCOMMODATIONS, API_URL } from '../../constants/Api';
import FormAmenities from '../../components/Form/FormAmenities';

const addSchema = yup.object().shape({
  accname: yup.string().required('Please enter a name'),
  description: yup.string().required('Please enter a description'),
  address: yup.string().required('Please enter an address'),
  bedrooms: yup
    .number()
    .required('Please enter bedrooms number')
    .min(1, 'Minimum 1 bedroom')
    .typeError('Amount must be a number'),
  bathrooms: yup
    .number()
    .required('Please enter bathrooms number')
    .min(1, 'Minimum 1 bathroom')
    .typeError('Amount must be a number'),
  priceDay: yup
    .number()
    .required('Please enter price')
    .min(1, 'Minimum 1')
    .typeError('Amount must be a number'),
  priceWeek: yup
    .number()
    .required('Please enter price')
    .min(1, 'Minimum 1')
    .typeError('Amount must be a number'),
});

export default function Admin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSchema) });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    console.log(data);

    // const data = {
    //   name: name,
    //   description: d,
    //   address:a,
    //   bedrooms: b,
    //   bathrooms: b,
    //   priceday: a,
    //   priceweek: a,
    // };

    try {
      // const res = await axios.post(API_URL + ACCOMMODATIONS, data);
    } catch (err) {
      console.log('add error', err);
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LayoutAdmin>
      <h1 className='mb60'>Add</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id='accname'
          title='Name'
          type='text'
          placeholder='Enter accommodation name'
          register={{ ...register('accname') }}
        />
        {errors.accname && <span className='alert-danger'>{errors.accname.message}</span>}
        <FormTextArea
          id='description'
          title='Description'
          placeholder='Enter accommodation description'
          rows={10}
          register={{ ...register('description') }}
        />
        {errors.description && (
          <span className='alert-danger'>{errors.description.message}</span>
        )}

        <FormInput
          id='address'
          title='Address'
          type='text'
          placeholder='Enter accommodation address'
          register={{ ...register('address') }}
        />
        {errors.address && <span className='alert-danger'>{errors.address.message}</span>}

        <SameLine>
          <FormInput
            id='bedrooms'
            title='Bedrooms'
            type='number'
            placeholder={0}
            width='80%'
            align='right'
            value={0}
            register={{ ...register('bedrooms') }}>
            {errors.bedrooms && (
              <span className='alert-danger'>{errors.bedrooms.message}</span>
            )}
          </FormInput>
          <FormInput
            id='bathrooms'
            title='Bathrooms'
            type='number'
            placeholder={0}
            width='80%'
            align='right'
            value={0}
            register={{ ...register('bathrooms') }}>
            {errors.bathrooms && (
              <span className='alert-danger'>{errors.bathrooms.message}</span>
            )}
          </FormInput>
        </SameLine>

        <SameLine>
          <FormInput
            id='priceDay'
            title='Price/Day'
            type='number'
            placeholder={0}
            width='80%'
            align='right'
            value={0}
            register={{ ...register('priceDay') }}>
            {errors.priceDay && (
              <span className='alert-danger'>{errors.priceDay.message}</span>
            )}
          </FormInput>
          <FormInput
            id='priceWeek'
            title='Price/Week'
            type='number'
            placeholder={0}
            width='80%'
            align='right'
            value={0}
            register={{ ...register('priceWeek') }}>
            {errors.priceWeek && (
              <span className='alert-danger'>{errors.priceWeek.message}</span>
            )}
          </FormInput>
        </SameLine>

        <FormAmenities />

        <FormImage
          id='images'
          title='Images'
          multiple
          register={{ ...register('images') }}
        />

        <Spacer size={50} />
        <Button
          svg='/icons/add.svg'
          type='submit'
          onClick={() => {}}
          color={Colors.white}
          width={150}
          title='Add'
        />
      </form>
      {isLoading && <Loader />}
      {error && (
        <Center>
          <div className='alert-danger'>Problem with login credentials</div>
        </Center>
      )}
    </LayoutAdmin>
  );
}
