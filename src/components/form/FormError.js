import React from 'react';
import PropTypes from 'prop-types';

import SubLabel from '../typography/SubLabel';

import './form.scss';

export default function FormError(props) {
  const { errorText } = props;

  return <SubLabel subLabel={errorText} labelColor="danger" />;
}

FormError.propTypes = {
  errorText: PropTypes.string.isRequired
};
