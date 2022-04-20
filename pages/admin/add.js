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
import axios from 'axios';
import { loadFromLocalStorage, USER } from '../../utils/localStorage';
import Router from 'next/router';

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
  const initialState = {
    'WI-FI': false,
    'Swimming Pool': false,
    'Child Friendly': false,
    Accessible: false,
    'Washing Machine': false,
    Fitness: false,
  };

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [amenitiesList, setAmenitiesList] = useState(initialState);

  const toggleAmenities = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    setAmenitiesList({ ...amenitiesList, [name]: checked });
  };

  // useEffect(() => {
  //   console.log(amenitiesList);
  // }, [amenitiesList]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addSchema) });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    const dataToSend = {
      name: data.accname,
      description: data.description,
      address: data.address,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      priceday: data.priceDay,
      priceweek: data.priceWeek,
      amenities: JSON.stringify(amenitiesList),
    };

    const user = loadFromLocalStorage(USER);

    let id = 0;
    try {
      const res = await axios.post(API_URL + ACCOMMODATIONS, dataToSend, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      id = res.data.id;

      const formData = new FormData();

      for (let i = 0; i < data.images.length; i++) {
        formData.append('files', data.images.item(i), data.images.item(i).name);
      }

      formData.append('ref', 'accomondations');
      formData.append('refId', id);
      formData.append('field', 'images');

      const resI = await axios.post(API_URL + 'upload', formData, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      setIsLoading(false);
      Router.push('/admin/');
    } catch (err) {
      console.log('add error', err);
      setError(err.toString());
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

        <FormAmenities handleAmenities={toggleAmenities} />

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
          <div className='alert-danger'>There was a problem adding the accommodation</div>
        </Center>
      )}
    </LayoutAdmin>
  );
}
