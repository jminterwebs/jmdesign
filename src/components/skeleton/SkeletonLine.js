import React from 'react';
import PropTypes from 'prop-types';

import './skeleton.scss';
import SkeletonFill from './SkeletonFill';

export default function SkeletonLine(props) {
  const { lines } = props;

  const height = lines % 2 === 0 ? lines * 30 + 15 : lines * 30 + 15;
  const styles = {
    height: `${height}px`
  };

  return <div style={styles} className="skeleton-line" />;
}

SkeletonFill.propTypes = {
  lines: PropTypes.number.isRequired
};
