import React from 'react';

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
