import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

import Title from '../typography/Title';

export default function Card(props) {
  const { title, footer, children, customClass, outsideTitle } = props;

  const outterTitle = outsideTitle ? <Title text={title} /> : '';
  const innerTitle = outsideTitle ? '' : <Title text={title} />;
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

Card.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
  outsideTitle: PropTypes.bool
};

Card.defaultProps = {
  title: '',
  footer: '',
  customClass: '',
  outsideTitle: false
};
