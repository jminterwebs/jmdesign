import React from 'react';
import PropTypes from 'prop-types';

import { RiErrorWarningLine } from 'react-icons/ri';

import SubLabel from '../typography/SubLabel';

import './form.scss';

export default function FormError(props) {
  const { errorText } = props;

  return (
    <div className="error-label text-danger-color">
      <RiErrorWarningLine /> <SubLabel subLabel={errorText} />
    </div>
  );
}

FormError.propTypes = {
  errorText: PropTypes.string.isRequired
};
