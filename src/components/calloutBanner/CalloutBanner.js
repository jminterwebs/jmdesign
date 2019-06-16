import React from 'react';

import Title from '../typography/Title';
import BodyText from '../typography/BodyText';

import './calloutBanner.scss';
import '../../styles/scss/global.scss';

export default function CalloutBanner(props) {
  const { title, bodyText, type, footer } = props;

  const footerAction = footer || '';

  return (
    <div className={`calloutBanner ${type}`}>
      <Title text={title} />
      <BodyText>{bodyText}</BodyText>
      {footerAction}
    </div>
  );
}
