import React from 'react';

import Label from '../typography/Label';

export default function Toggle(props) {
  const { type, label, id } = props;

  return (
    <div className="toggle">
      <label className="switch" htmlFor={id}>
        <input id={id} type="checkbox" />

        <span className={`slider round ${type}`}></span>
      </label>

      <span className="toggleLabel">
        <Label label={label} displayStyle="inline-block" weight="500" />
      </span>
    </div>
  );
}
