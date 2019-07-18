import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, array, boolean } from '@storybook/addon-knobs';

// Story Book Globals
import List from 'components/list/List';

const list = storiesOf('List', module);

list
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
  .add('List', () => {
    const listed = array('List', ['one', 'two', 'Three', 'Bills', 'Bulls']);
    const numbered = boolean('Numbered', true);

    return <List list={listed} numbered={numbered} />;
  });
