import React from 'react';

export default function Wrapper(props) {
  const { children, customClass } = props;
  return <div className={customClass}>{children}</div>;
}
