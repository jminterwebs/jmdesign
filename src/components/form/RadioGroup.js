import React from 'react';
import PropTypes from 'prop-types';

import Label from '../typography/Label';
import SubLabel from '../typography/SubLabel';

import './form.scss';

export default function RadioGroup(props) {
  const { name, values } = props;

  return values.map(value => {
    return (
      <>
        <input type="radio" id={value.value} name={name} value={value.value} />
        {value.text !== '' ? (
          <Label label={value.text} labelColor={value.type} weight="Bolder" />
        ) : (
          ''
        )}
        {value.subText !== '' ? <SubLabel subLabel={value.subText} /> : ''}
      </>
    );
  });
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string,
    subText: PropTypes.string,
    type: PropTypes.string
  }).isRequired
};

RadioGroup.defaultProps = {
  values: {
    text: '',
    subText: '',
    type: 'secondary'
  }
};
