import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export default function Button(props) {
  const { size, type, outlined, buttonType, text, onClick } = props;

  const buttonOutlined = outlined ? `${type}-outlined` : '';

  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      className={`button-style ${type} 
      button-${size} ${buttonOutlined}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  buttonType: PropTypes.string,
  outlined: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  size: 'medium',
  type: 'button',
  buttonType: 'button',
  outlined: false
};
