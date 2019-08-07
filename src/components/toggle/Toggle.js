import React from 'react';
import PropTypes from 'prop-types';

import Label from '../typography/Label';

import './toggle.scss';

export default function Toggle(props) {
  const { type, label, id } = props;

  return (
    <div className="toggle">
      <label className="switch" htmlFor={id}>
        <input id={id} type="checkbox" />

        <span className={`slider round ${type}`}>
          <span className="round before" />
        </span>
      </label>

      <span className="toggleLabel">
        <Label label={label} displayStyle="inline-block" weight="500" />
      </span>
    </div>
  );
}

Toggle.propTypes = {
  type: PropTypes.oneOf([
    'secondary',
    'success',
    'primary',
    'info',
    'warning',
    'danger',
    'dark',
    'light'
  ]),
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

Toggle.defaultProps = {
  type: 'info'
};
