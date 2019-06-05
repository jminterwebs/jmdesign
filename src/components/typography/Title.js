import React from 'react';
import PropTypes from 'prop-types';

import 'styles/scss/global.scss';

export default function Title(props) {
  const { text, color } = props;

  return <h2 className={`title-text text-${color}-color`}>{text}</h2>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired
};
