import React from 'react';
import PropTypes from 'prop-types';

import Label from '../typography/Label';

import './breadcrumb.scss';

function Breadcrumb(props) {
  const { children } = props;

  return <nav className="breadcrumb-nav">{children}</nav>;
}

function Home(props) {
  const { name, link } = props;

  return (
    <li className="home-crumb">
      <a href={link}>
        <Label label={name} />
      </a>
    </li>
  );
}
function PreviousLink(props) {
  const { name, link } = props;

  return (
    <li className="home-crumb">
      <a href={link}>
        <Label label={name} />
      </a>
    </li>
  );
}

function Current(props) {
  const { name } = props;

  return (
    <li className="home-crumb">
      <Label label={name} />
    </li>
  );
}

Breadcrumb.Home = Home;
Breadcrumb.History = PreviousLink;
Breadcrumb.Current = Current;

export default Breadcrumb;

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

PreviousLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

Current.protoTypes = {
  name: PropTypes.string.isRequired
};
