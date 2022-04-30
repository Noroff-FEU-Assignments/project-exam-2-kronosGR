import React from 'react';
import { PropTypes } from 'prop-types';

export default function Twitter({ width, height }) {
  return (
    <svg
      id='Icon_ionic-logo-twitter'
      data-name='Icon ionic-logo-twitter'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 33.18 27'>
      <path
        className='footer_img'
        id='Icon_ionic-logo-twitter-2'
        data-name='Icon ionic-logo-twitter'
        d='M34.594,7.7a13.763,13.763,0,0,1-3.909,1.076,6.831,6.831,0,0,0,3-3.769,13.527,13.527,0,0,1-4.324,1.652,6.805,6.805,0,0,0-11.777,4.655,6.665,6.665,0,0,0,.176,1.554A19.292,19.292,0,0,1,3.72,5.745a6.821,6.821,0,0,0,2.116,9.1,6.649,6.649,0,0,1-3.094-.851v.084a6.813,6.813,0,0,0,5.463,6.68A6.852,6.852,0,0,1,6.413,21a6.422,6.422,0,0,1-1.28-.127A6.818,6.818,0,0,0,11.5,25.6a13.648,13.648,0,0,1-8.459,2.918,13.8,13.8,0,0,1-1.624-.1,19.028,19.028,0,0,0,10.42,3.08c12.537,0,19.385-10.385,19.385-19.392,0-.3-.007-.591-.021-.879A13.858,13.858,0,0,0,34.594,7.7Z'
        transform='translate(-1.413 -4.5)'
        fill='#faf9f6'
        stroke='#032d51'
      />
    </svg>
  );
}

Twitter.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
