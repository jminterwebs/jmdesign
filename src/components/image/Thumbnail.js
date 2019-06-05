// Core React
import React from 'react';
import PropTypes from 'prop-types';

export default function Thumbnail(props) {
  const { imageSrc, size, rounded } = props;

  const width = setSize => {
    let setWidth;

    switch (setSize) {
      case 'small':
        setWidth = '60px';
        break;
      case 'medium':
        setWidth = '80px';
        break;
      case 'large':
        setWidth = '100px';
        break;
      default:
        setWidth = '80px';
    }
    return { setWidth };
  };

  const roundedCorners = rounded ? width(size).setWidth : 'unset';

  const styles = {
    width: width(size).setWidth,
    height: width(size).setWidth,
    padding: '.5em',
    borderRadius: roundedCorners
  };

  return <img style={styles} src={imageSrc} alt="avatar preview" />;
}

Thumbnail.propTypes = {
  /** Image source for Avatar */
  imageSrc: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Thumbnail.defaultProps = {
  size: 'medium'
};
