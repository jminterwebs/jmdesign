// Core React
import React from 'react';
import PropTypes from 'prop-types';

// Global Style
import '../../styles/scss/global.scss';

export default function BodyText(props) {
  const { children, align, minHeight } = props;

  const styles = {
    textAlign: align,
    minHeight
  };

  return (
    <p className="body-text" style={styles}>
      {children}
    </p>
  );
}

BodyText.propTypes = {
  /** Body Text */
  children: PropTypes.node.isRequired,
  /** Alignment of body text */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justify',
    'initial',
    'inherit'
  ])
};

BodyText.defaultProps = {
  align: 'left'
};
