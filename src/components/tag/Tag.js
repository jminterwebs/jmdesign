import React from 'react';
import PropTypes from 'prop-types';

import Label from '../typography/Label';

import './tag.scss';

export default function Tag(props) {
  const { id, size, type, label, removeAction, removable } = props;

  const remove = removable ? (
    <h2
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      onClick={removeAction}
      onKeyPress={removeAction}
      className="removeTag label-text">
      X
    </h2>
  ) : (
    ''
  );

  return (
    <span id={id} className={`tag-style tag-${type} tag-${size}`}>
      <Label label={label} labelColor="white" />
      {remove}
    </span>
  );
}

Tag.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  removable: PropTypes.bool,
  removeAction: PropTypes.func,
  id: PropTypes.string.isRequired
};

Tag.defaultProps = {
  size: 'medium',
  type: 'info',
  removable: true,
  removeAction: () => {
    return false;
  }
};
