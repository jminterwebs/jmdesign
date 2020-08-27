import React from 'react';
import PropTypes from 'prop-types';

import './progressBar.scss';

export default function ProgressBar(props) {
  const { barWidth, steps, currentStep, type } = props;

  const progressDone = `${(currentStep / steps) * 100}%`;

  const fullBarStyle = {
    width: barWidth
  };

  const styles = {
    width: progressDone
  };

  return (
    <div className={`progressBar-style ${type}-bar `} style={fullBarStyle}>
      <div style={styles} className={`${type}-bar`} />
    </div>
  );
}

ProgressBar.propTypes = {
  barWidth: PropTypes.string,
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,

  type: PropTypes.string
};

ProgressBar.defaultProps = {
  barWidth: '100%',
  type: 'info'
};
