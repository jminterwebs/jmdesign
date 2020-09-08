import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';

// Story Book Globals
import Checkbox from 'components/form/Checkbox';
import Dropdown from 'components/form/Dropdown';
import FormError from 'components/form/FormError';
import Input from 'components/form/Input';
import RadioGroup from 'components/form/RadioGroup';

const form = storiesOf('Form', module);

form
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: true,
      inline: true,
      text: '',
      styles: {
        header: {
          h1: {
            color: 'black' // and the headers of the sections are red.
          }
        }
      }
    })
  )
  .add('CheckBox', () => {
    const name = text('Name', 'name');
    const value = text('Value', 'value');
    const type = text('Type', 'info');
    const formId = text('Form Id', 'formId');
    const checked = boolean('Checked?', false);
    const size = text('Size', 'medium');
    const label = text('Label', 'Label');

    return (
      <Checkbox
        name={name}
        value={value}
        formId={formId}
        label={label}
        checked={checked}
        type={type}
        size={size}
      />
    );
  })
  .add('Dropdown', () => {
    const options = object('Options', [
      { value: 'one', label: 'testing' },
      { value: 'two', label: 'hello' },
      { value: 'three', label: 'bye' }
    ]);
    const handleChange = () => {
      // eslint-disable-next-line no-console
      return console.log('Button test');
    };
    const name = text('Name', 'name');
    const ided = text('Id', 'id');

    return (
      <Dropdown
        options={options}
        handleChange={handleChange}
        name={name}
        id={ided}
      />
    );
  })
  .add('Form Error', () => {
    const errorText = text('Error Text', 'Error Text');

    return <FormError errorText={errorText} />;
  })
  .add('Input', () => {
    const type = text('Type', 'info');
    const size = text('Size', 'medium');
    const inputType = text('Input Type', 'input type');
    const formId = text('Form Id', 'formId');
    const name = text('Name', 'name');
    const placeholder = text('Placeholder', 'Placeholder');
    const require = boolean('Required?', true);

    return (
      <Input
        type={type}
        size={size}
        inputType={inputType}
        formId={formId}
        name={name}
        placeholder={placeholder}
        required={require}
      />
    );
  })
  .add('Radio Group', () => {
    const name = text('Name', 'name');
    const values = object('Values', [
      { value: 'one', text: 'testing', subText: 'tester', type: 'info' },
      { value: 'two', text: 'hello', subText: 'tester', type: 'info' },
      { value: 'three', text: 'bye', subText: 'tester' }
    ]);

    return <RadioGroup name={name} values={values} />;
  });
