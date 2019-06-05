import React from 'react';
import PropTypes from 'prop-types';

export default function Image(props) {
  const { imageSrc, width, height, alt, title } = props;

  const styles = {
    padding: '.5em'
  };
  return (
    <img
      width={width}
      height={height}
      style={styles}
      alt={alt}
      title={title}
      src={imageSrc}
    />
  );
}

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Image.defaultProps = {
  width: '',
  height: ''
};
