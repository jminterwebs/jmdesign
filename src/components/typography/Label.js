// Core React
import React from 'react';
import PropTypes from 'prop-types';

// Global Style
import '../../styles/scss/global.scss';

export default function Label(props) {
  const { label, weight, displayStyle, labelColor, customClass } = props;

  const styles = {
    'font-weight': weight,
    display: displayStyle,
    textAlign: 'left'
  };

  const textColor = labelColor ? ` text-${labelColor}-color` : '';

  return (
    <h2 className={`label-text${textColor} ${customClass}`} style={styles}>
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
  ]).isRequired
};

Label.defaultProps = {
  weight: '',
  displayStyle: ''
};
