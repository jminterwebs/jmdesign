import React from 'react';

import Label from '../typography/Label';

import './badge.scss';

export default function Badge(props) {
  const { size, type, label, outlined } = props;

  const badgeOutlined = outlined ? `${type}-outlined` : '';

  return (
    <span className={`badge-input ${type} badge-${size} ${badgeOutlined}`}>
      <Label label={label} />
    </span>
  );
}
