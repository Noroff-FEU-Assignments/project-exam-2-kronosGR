import Router from 'next/router';
import { useEffect } from 'react';
import Loader from '../../components/Loader';
import { removeFromLocalStorage, USER } from '../../utils/localStorage';

export default function Logout() {
  useEffect(() => {
    removeFromLocalStorage(USER);
    Router.push('/');
  });

  return (
    <div>
      <Loader />
    </div>
  );
}
