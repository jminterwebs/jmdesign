// Core React
import React from 'react';
import PropTypes from 'prop-types';

// Global Style
import '../../styles/scss/global.scss';

export default function SubLabel(props) {
  const { subLabel } = props;

  return <h3 className="subLabel-text">{subLabel}</h3>;
}

SubLabel.propTypes = {
  /** Text for subLabel */
  subLabel: PropTypes.string.isRequired
};
