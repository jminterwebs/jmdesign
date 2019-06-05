import React from 'react';
import PropTypes from 'prop-types';

import 'styles/scss/global.scss';

export default function Heading(props) {
  const { text, size, heading, color } = props;

  switch (heading) {
    case 'h1':
      return <h1 className={`heading-${size} text-${color}-color`}>{text}</h1>;
    case 'h2':
      return <h2 className={`heading-${size} text-${color}-color`}>{text}</h2>;
    case 'h3':
      return <h3 className={`heading-${size} text-${color}-color`}>{text}</h3>;
    default:
      return <h1 className={`heading-${size} text-${color}-color`}>{text}</h1>;
  }
}

Heading.propTypes = {
  /** Text for heading */
  text: PropTypes.string.isRequired,
  /** Size of heading */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
  /** h tag to use */
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Heading.defaultProps = {
  heading: 'h1',
  size: 'medium'
};
