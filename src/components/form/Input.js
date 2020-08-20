import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

export default function Input(props) {
  const { type, size, inputType, formId, name, placeholder, required } = props;

  return (
    <input
      type={inputType}
      form={formId}
      required={required}
      placeholder={placeholder}
      name={name}
      className={`input-style input-${type} input-${size}`}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  type: 'secondary',
  size: 'medium',
  placeholder: '',
  required: true
};
