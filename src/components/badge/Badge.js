import React from 'react';
import PropTypes from 'prop-types';

import Label from '../typography/Label';

import './badge.scss';

export default function Badge(props) {
  const { size, type, label, outlined } = props;

  const badgeOutlined = outlined ? `${type}-outlined` : '';

  return (
    <span className={`badge-input ${type} badge-${size} ${badgeOutlined}`}>
      <Label label={label} labelColor="white" />
    </span>
  );
}

Badge.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  outlined: PropTypes.bool
};

Badge.defaultProps = {
  size: 'medium',
  type: 'info',
  outlined: false
};
