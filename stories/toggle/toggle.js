import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Story Book Globals
import Toggle from 'components/toggle/Toggle';

const toggle = storiesOf('Toggle', module);

toggle
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
  .add('Toggle', () => {
    const type = select(
      'Type:',
      [
        'secondary',
        'success',
        'primary',
        'info',
        'warning',
        'danger',
        'dark',
        'light'
      ],
      'info'
    );
    const label = text('Label', 'Label Text');
    const id = 1;

    return <Toggle type={type} label={label} id={id} />;
  });
