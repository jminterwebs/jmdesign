import React from 'react';

import Label from '../typography/Label';

import './list.scss';

function List(props) {
  const { numbered, list, children, unstyled } = props;

  const styledList = unstyled ? 'unbulleted' : '';

  const listItems = list
    ? list.map(listItem => {
        return (
          <li key={listItem} className={`listItem ${styledList}`}>
            <Label label={listItem} />
          </li>
        );
      })
    : null;

  const ordered = numbered ? (
    <ol className="listables">
      {listItems}
      {children}
    </ol>
  ) : (
    <ul className={`listables ${styledList}`}>
      {listItems}
      {children}
    </ul>
  );
  return <React.Fragment>{ordered}</React.Fragment>;
}

function LineItem(props) {
  const { children } = props;

  const content = children || null;

  return <li className="list">{content}</li>;
}

List.LineItem = LineItem;

export default List;
