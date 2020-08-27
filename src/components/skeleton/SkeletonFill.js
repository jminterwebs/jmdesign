import React from 'react';
import PropTypes from 'prop-types';

import './skeleton.scss';

export default function SkeletonFill(props) {
  const { width, height } = props;

  const styles = {
    width,
    height
  };

  return (
    <div style={styles} className="skeleton-fill">
      {' '}
    </div>
  );
}

SkeletonFill.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
