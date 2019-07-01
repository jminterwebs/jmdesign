import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

// Story Book Globals
import Badge from 'components/badge/Badge';

const badge = storiesOf('Badge', module);

badge
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
  .add('Badge', () => {
    const size = select('size', ['small', 'medium', 'large'], 'small');
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
    const label = text('label', 'Label');
    const outlined = boolean('outlined', false);

    return <Badge size={size} type={type} label={label} outlined={outlined} />;
  });
