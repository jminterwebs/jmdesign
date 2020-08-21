import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Label from '../typography/Label';
import './form.scss';

export default function Checkbox(props) {
  const { name, value, type, formId, checked, size, label } = props;

  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label
      className={`checkbox-style `}
      htmlFor={name}
      onChange={event => setIsChecked(event.currentTarget.checked)}>
      <input
        className={`checkbox-${type} checkbox-${size}`}
        checked={isChecked}
        form={formId}
        type="checkbox"
        name={name}
        value={value}
      />
      <Label label={label} labelColor={type} displayStyle="inline-block" />
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  formId: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  size: PropTypes.string
};

Checkbox.defaultProps = {
  type: 'secondary',
  size: 'medium',
  checked: false
};
