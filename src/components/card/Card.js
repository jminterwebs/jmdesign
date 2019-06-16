import React from 'react';

import './card.scss';

import Title from '../typography/Title';

export default function Card(props) {
  const { title, footer, children, customClass, outsideTitle } = props;

  const outterTitle = outsideTitle ? <Title title={title} /> : '';
  const innerTitle = outsideTitle ? '' : <Title title={title} />;
  const style = customClass || '';

  return (
    <div className="card-container">
      {outterTitle}
      <div className={`card ${style}`}>
        {innerTitle}
        {children}
        {footer}
      </div>
    </div>
  );
}
