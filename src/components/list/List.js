import React from 'react';

import Label from '../typography/Label';

function List(props) {
  const { numbered, list, children } = props;

  const listItems = list
    ? list.map(listItem => {
        return (
          <li key={listItem} className="listItem">
            <Label label={listItem} />
          </li>
        );
      })
    : null;

  const ordered =
    numbered === 'number' ? (
      <ol>
        {listItems}
        {children}
      </ol>
    ) : (
      <ul>
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
