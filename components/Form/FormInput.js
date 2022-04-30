import React from 'react';

import styles from '../../styles/FormInput.module.css';
import { PropTypes } from 'prop-types';

export default function FormInput({
  id,
  title,
  placeholder,
  type,
  width,
  align,
  children,
  register,
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        style={{ width: width, textAlign: align }}
        {...register}
      />
      {children}
    </div>
  );
}

FormInput.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  register: PropTypes.object,
};

FormInput.defaultProps = {
  width: '100%',
  align: 'left',
};
