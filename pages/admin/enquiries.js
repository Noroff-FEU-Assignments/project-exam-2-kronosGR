import Auth from '../../components/Auth/Auth';
import LayoutAdmin from '../../components/Layout/LayoutAdmin';
import { Error } from '../../components/Error';
import { useEffect, useState } from 'react';
import { loadFromLocalStorage, USER } from '../../utils/localStorage';
import { getEnquiries } from '../../BackEnd/getEnquiries';
import { EnquireList } from '../../components/Enquiries/EnquireList';
import Router from 'next/router';

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = loadFromLocalStorage(USER);
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await getEnquiries(user.jwt);
        if (res.error) throw new Error('There was a problem');
        setEnquiries(res.result);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  return (
    <LayoutAdmin>
      <Auth />
      <h1 className='mb60'>Enquiries</h1>
      <EnquireList enquiries={enquiries} />
      <Error msg='Something went wrong' error={error} />
    </LayoutAdmin>
  );
}
