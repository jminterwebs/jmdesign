import React from 'react';
import PropTypes from 'prop-types';

import SubLabel from '../typography/SubLabel';

import './progressBar.scss';

export default function SegmentedBar(props) {
  const { segments } = props;

  return (
    <div className="segmentedbar-style">
      {segments.map(segment => {
        return (
          <div className="segment-container">
            <div className={`${segment.active} ${segment.type}-segment`} />
            <SubLabel subLabel={segment.name} labelColor={segment.type} />
          </div>
        );
      })}
    </div>
  );
}

SegmentedBar.propTypes = {
  segments: PropTypes.shape({
    name: PropTypes.string,
    active: PropTypes.string.isRequired,
    type: PropTypes.string
  }).isRequired
};
