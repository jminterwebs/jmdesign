// Core React
import React from 'react';
import PropTypes from 'prop-types';

// Global Style
import '../../styles/scss/global.scss';

export default function Label(props) {
  const { label, weight, displayStyle, labelColor, customClass } = props;

  const styles = {
    fontWeight: weight,
    display: displayStyle
  };

  const addedClass = customClass || '';
  const textColor = labelColor ? ` text-${labelColor}-color` : '';

  return (
    <h2 className={`label-text${textColor} ${addedClass}`} style={styles}>
      {label}
    </h2>
  );
}

Label.propTypes = {
  /** Text for Label */
  label: PropTypes.string.isRequired,
  /** Font weight for Label */
  weight: PropTypes.string,
  /** CSS override for display */
  displayStyle: PropTypes.string,
  /** Change Label Color */
  labelColor: PropTypes.oneOf([
    'default',
    'success',
    'primary',
    'info',
    'warning',
    'danger',
    'black',
    'white'
  ])
};

Label.defaultProps = {
  weight: '',
  displayStyle: '',
  labelColor: 'black'
};
