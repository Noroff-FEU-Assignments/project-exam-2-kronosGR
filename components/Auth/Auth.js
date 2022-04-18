import Router from 'next/router';
import React, { useEffect } from 'react';
import { checkIfLoggedIn } from '../../utils/localStorage';

export default function Auth() {
  useEffect(() => {
    if (!checkIfLoggedIn()) {
      Router.push('/');
    }
  }, []);
  return <div></div>;
}
