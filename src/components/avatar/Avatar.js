// Core React
import React from 'react';
import PropTypes from 'prop-types';

import Thumbnail from '../image/Thumbnail';
import Label from '../typography/Label';
import SubLabel from '../typography/SubLabel';

import './avatar.scss';

export default function Avatar(props) {
  const { imageSrc, label, subLabel, initials } = props;

  const avatarPicture = imageSrc ? (
    <Thumbnail imageSrc={imageSrc} rounded size="small" />
  ) : (
    <Label label={initials} customClass="avatar-initials" />
  );

  return (
    <div className="avatar">
      {avatarPicture}
      <div className="avatar-text">
        <Label label={label} />
        <SubLabel subLabel={subLabel} />
      </div>
    </div>
  );
}

Avatar.propTypes = {
  imageSrc: PropTypes.string,
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.string,
  initials: PropTypes.string.isRequired
};

Avatar.defaultProps = {
  imageSrc: '',
  subLabel: ''
};
