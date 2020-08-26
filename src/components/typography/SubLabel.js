// Core React
import React from 'react';
import PropTypes from 'prop-types';

// Global Style
import '../../styles/scss/global.scss';

export default function SubLabel(props) {
  const { subLabel, labelColor } = props;
  const textColor = labelColor ? ` text-${labelColor}-color` : '';

  return <h3 className={`subLabel-text ${textColor} `}>{subLabel}</h3>;
}

SubLabel.propTypes = {
  /** Text for subLabel */
  subLabel: PropTypes.string.isRequired,
  labelColor: PropTypes.string
};

SubLabel.defaultProps = {
  labelColor: 'dark-light'
};
