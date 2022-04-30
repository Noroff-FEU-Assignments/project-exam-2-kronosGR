import React from 'react';
import { Colors } from '../../../constants/Colors';
import { PropTypes } from 'prop-types';

export default function Instagram({ width, height }) {
  return (
    <svg
      id='Icon_ionic-logo-instagram'
      data-name='Icon ionic-logo-instagram'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className='footer_img'
      viewBox='0 0 27 27'>
      <rect
        className='footer_img_bg'
        fill={Colors.black}
        stroke={Colors.black}
        width={width}
        height={height}
        rx='2'></rect>
      <path
        className='footer_img'
        id='Path_1'
        data-name='Path 1'
        d='M23.625,6.75a5.642,5.642,0,0,1,5.625,5.625v11.25a5.642,5.642,0,0,1-5.625,5.625H12.375A5.642,5.642,0,0,1,6.75,23.625V12.375A5.642,5.642,0,0,1,12.375,6.75h11.25m0-2.25H12.375A7.9,7.9,0,0,0,4.5,12.375v11.25A7.9,7.9,0,0,0,12.375,31.5h11.25A7.9,7.9,0,0,0,31.5,23.625V12.375A7.9,7.9,0,0,0,23.625,4.5Z'
        transform='translate(-4.5 -4.5)'
        fill='#faf9f6'
      />
      <path
        id='Path_2'
        data-name='Path 2'
        d='M25.313,12.375A1.688,1.688,0,1,1,27,10.688,1.683,1.683,0,0,1,25.313,12.375Z'
        transform='translate(-4.5 -4.5)'
        fill='#faf9f6'
      />
      <path
        className='footer_img'
        id='Path_3'
        data-name='Path 3'
        d='M18,13.5A4.5,4.5,0,1,1,13.5,18,4.5,4.5,0,0,1,18,13.5m0-2.25A6.75,6.75,0,1,0,24.75,18,6.752,6.752,0,0,0,18,11.25Z'
        transform='translate(-4.5 -4.5)'
        fill='#faf9f6'
      />
    </svg>
  );
}

Instagram.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
