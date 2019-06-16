import React from 'react';

import BodyText from '../typography/BodyText';
import Title from '../typography/Title';
import Card from '../card/Card';
import Label from '../typography/Label';

import './definitionTable.scss';

export default function DefinitionTable(props) {
  const { title, data } = props;

  const definitionList = data.map(list => {
    return (
      <div className="definition-row">
        <span className="definition-name definition-cell">
          <Label label={list[Object.keys(list)[0]]} />
        </span>
        <span className="definition-defined definition-cell">
          <BodyText> {list[Object.keys(list)[1]]}</BodyText>
        </span>
      </div>
    );
  });

  return (
    <Card customClass="reportsCard">
      <Title text={title} />
      <div className="definitions-table">{definitionList}</div>
    </Card>
  );
}
