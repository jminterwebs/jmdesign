import React from 'react';
import PropTypes from 'prop-types';

import BodyText from '../typography/BodyText';
import Card from '../card/Card';
import Label from '../typography/Label';

import './definitionTable.scss';

export default function DefinitionTable(props) {
  const { title, data, outsideTitle } = props;

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
    <Card customClass="reportsCard" title={title} outsideTitle={outsideTitle}>
      <div className="definitions-table">{definitionList}</div>
    </Card>
  );
}

DefinitionTable.propTypes = {
  title: PropTypes.string,
  outsideTitle: PropTypes.bool,
  data: PropTypes.shape({
    term: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired
  }).isRequired
};

DefinitionTable.defaultProps = {
  title: '',
  outsideTitle: false
};
