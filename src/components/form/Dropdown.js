import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

export default function Dropdown(props) {
  const { options, handleChange, name, id } = props;

  return (
    <select name={name} id={id} onChange={handleChange}>
      <option disabled selected value />

      {options.map(option => {
        return <option value={option.value} label={option.label} />;
      })}
    </select>
  );
}

Dropdown.propTypes = {
  options: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
